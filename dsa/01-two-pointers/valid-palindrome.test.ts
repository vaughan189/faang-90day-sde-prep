import { describe, it, expect } from 'vitest';
import { isPalindrome } from './valid-palindrome.js';

describe('125. Valid Palindrome', () => {
  it('returns true for a standard palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('returns false for non-palindromes', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('returns true for an empty string or whitespace-only', () => {
    expect(isPalindrome(' ')).toBe(true);
  });
});
