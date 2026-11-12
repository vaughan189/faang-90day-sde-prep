/**
 * Polyfill: Promise.any
 * Handles: Resolving on first fulfillment, AggregateError if all reject.
 */

function any<T>(iterable: Iterable<T | PromiseLike<T>>): Promise<T> {
  const createAggregateError = (errors: unknown[], message: string): Error => {
    if (typeof AggregateError !== "undefined") {
      return new AggregateError(errors, message);
    }

    return new Error(message);
  };

  return new Promise<T>((resolve, reject) => {
    const promises = Array.from(iterable);
    const total = promises.length;

    if (total === 0) {
      return reject(createAggregateError([], "All promises rejected"));
    }
    const errors = new Array(total);
    let rejectedCount = 0;

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          errors[index] = err;
          rejectedCount++;

          if (rejectedCount === total) {
            reject(createAggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

export default any;
