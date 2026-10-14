/**
 * Polyfill: debounce
 * Handles: basic function and delay.
 */

function debounce<T extends (...args: any[]) => unknown>(
  func: T,
  wait: number,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;

    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
