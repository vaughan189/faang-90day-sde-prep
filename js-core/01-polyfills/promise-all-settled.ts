/**
 * Polyfill: Promise.allSettled
 * Handles: Waiting for all promises to resolve or reject, returning status objects { status, value | reason }.
 */

function allSettled<T>(
  promises: Iterable<T | PromiseLike<T>>,
): Promise<
  Array<
    { status: "fulfilled"; value: T } | { status: "rejected"; reason: unknown }
  >
> {
  return new Promise((resolve) => {
    const inputPromises = Array.from(promises);

    if (inputPromises.length === 0) {
      return resolve([]);
    }

    const results: Array<
      | { status: "fulfilled"; value: T }
      | { status: "rejected"; reason: unknown }
    > = new Array(inputPromises.length);
    let settledCount = 0;

    inputPromises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === inputPromises.length) {
            resolve(results);
          }
        });
    });
  });
}

export default allSettled;
