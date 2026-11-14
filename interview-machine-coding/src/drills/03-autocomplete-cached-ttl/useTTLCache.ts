import { useRef } from "react";

class TTLCache {
  cache: Map<string, { data: unknown; expiresAt: number }>;
  ttlMs: number;
  maxSize: number;

  constructor(ttlMs = 5 * 60 * 1000, maxSize = 100) {
    this.cache = new Map();
    this.ttlMs = ttlMs;
    this.maxSize = maxSize;
  }

  get(key: string): unknown | null {
    const normalizedKey = key.trim().toLowerCase();
    const entry = this.cache.get(normalizedKey);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(normalizedKey);
      return null;
    }

    this.cache.delete(normalizedKey);
    this.cache.set(normalizedKey, entry);
    return entry.data;
  }

  set(key: string, data: unknown) {
    const normalizedKey = key.trim().toLowerCase();

    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) this.cache.delete(oldestKey);
    }
    this.cache.set(normalizedKey, {
      data,
      expiresAt: Date.now() + this.ttlMs,
    });
  }

  clear() {
    this.cache.clear();
  }
}

export function useTTLCache(ttlMs: number, maxSize: number) {
  const cacheRef = useRef<TTLCache | null>(null);

  if (!cacheRef.current) {
    cacheRef.current = new TTLCache(ttlMs, maxSize);
  }

  return cacheRef.current;
}
