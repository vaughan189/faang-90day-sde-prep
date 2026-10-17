/**
 * Polyfill: throttle
 * Handles: Leading call, trailing execution, and cancel() method.
 */

function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = { leading: true, trailing: true },
) {
  let waiting = false;
  let lastArgs: Parameters<T> | null = null;
  let context: ThisParameterType<T> | null = null;

  const startWaitingPeriod = () => {
    waiting = true;
    setTimeout(() => {
      if (lastArgs && options.trailing) {
        func.apply(context!, lastArgs);
        lastArgs = null;
        context = null;
        startWaitingPeriod();
      } else {
        waiting = false;
      }
    }, wait);
  };

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    context = this;

    if (!waiting) {
      if (options.leading != false) {
        func.apply(context, args);
      } else {
        lastArgs = args;
      }
      startWaitingPeriod();
    } else {
      if (options.trailing !== false) {
        lastArgs = args;
      }
    }
  };
}
