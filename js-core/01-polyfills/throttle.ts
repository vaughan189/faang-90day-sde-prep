/**
 * Polyfill: basic throttle
 */

type AnyFunction = (...args: any[]) => any;

function throttle<T extends AnyFunction>(func: T, wait: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        if (lastArgs) {
          func.apply(this, lastArgs);
          lastArgs = null;
        }
        timer = null;
      }, wait);
    } else {
      lastArgs = args;
    }
  };
}
