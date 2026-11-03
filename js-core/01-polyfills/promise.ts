/**
 * Polyfill: Custom Promise (Promises/A+ Compliant)
 * Handles: Executor, resolve, reject, .then() chaining.
 */

class MyPromise {
  private state: "PENDING" | "FULFILLED" | "REJECTED";
  private value: unknown;
  private reason: unknown;
  private onFulfilledCallbacks: Array<() => void>;
  private onRejectedCallbacks: Array<() => void>;

  constructor(
    executor: (
      resolve: (value: unknown) => void,
      reject: (reason: unknown) => void,
    ) => void,
  ) {
    this.state = "PENDING";
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    let called = false;

    const resolve = (value: unknown) => {
      if (called) return;
      called = true;
      this.resolvePromise(value);
    };

    const reject = (reason: unknown) => {
      if (called) return;
      called = true;
      this.rejectPromise(reason);
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  resolvePromise(value: unknown) {
    if (this.state !== "PENDING") return;

    if (value === this) {
      this.rejectPromise(new TypeError("Chaining cycle detected"));
      return;
    }

    if (value instanceof MyPromise) {
      value.then(
        (result: unknown) => this.resolvePromise(result),
        (error: unknown) => this.rejectPromise(error),
      );
      return;
    }

    this.state = "FULFILLED";
    this.value = value;

    this.onFulfilledCallbacks.forEach((fn) => fn());
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
  }

  rejectPromise(reason: unknown) {
    if (this.state !== "PENDING") return;

    this.state = "REJECTED";
    this.reason = reason;

    this.onRejectedCallbacks.forEach((fn) => fn());
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
  }

  then(
    onFulfilled?: ((value: unknown) => unknown) | null,
    onRejected?: ((reason: unknown) => unknown) | null,
  ) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        queueMicrotask(() => {
          try {
            const result =
              typeof onFulfilled === "function"
                ? onFulfilled(this.value)
                : this.value;

            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      };

      const handleRejected = () => {
        queueMicrotask(() => {
          try {
            if (typeof onRejected !== "function") {
              reject(this.reason);
              return;
            }

            const result = onRejected(this.reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      };

      if (this.state === "FULFILLED") {
        handleFulfilled();
      } else if (this.state === "REJECTED") {
        handleRejected();
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  catch(onRejected?: ((reason: unknown) => unknown) | null) {
    return this.then(null, onRejected);
  }

  static resolve(value: unknown) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason: unknown) {
    return new MyPromise((resolve, reject) => reject(reason));
  }
}
