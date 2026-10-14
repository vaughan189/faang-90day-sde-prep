/**
 * Polyfill: debounce
 * Handles: Leading edge execution, trailing edge execution, and cancel() method.
 */

type DebounceOptions = {
  leading?: boolean;
  trailing?: boolean;
};

type DebouncedFunction<T extends (...args: any[]) => any> = ((
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => void) & {
  cancel: () => void;
};

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: DebounceOptions = {}
): DebouncedFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: ThisParameterType<T> | null = null;
  let isLeadingInvoked = false;

  const leading = !!options.leading;
  const trailing = options.trailing !== false;

  function debounced(this: ThisParameterType<T>, ...args: Parameters<T>) {
    lastArgs = args;
    lastThis = this;

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    if (leading && timeoutId === null) {
      if (lastThis !== null && lastArgs !== null) {
        func.apply(lastThis, lastArgs);
      }
      isLeadingInvoked = true;
    } else {
      isLeadingInvoked = false;
    }

    timeoutId = setTimeout(() => {
      if (trailing && !isLeadingInvoked && lastThis !== null && lastArgs !== null) {
        func.apply(lastThis, lastArgs);
      }

      timeoutId = null;
      isLeadingInvoked = false;
      lastArgs = null;
      lastThis = null;
    }, wait);
  }

  debounced.cancel = function () {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = null;
    isLeadingInvoked = false;
    lastArgs = null;
    lastThis = null;
  };

  return debounced as DebouncedFunction<T>;
}
