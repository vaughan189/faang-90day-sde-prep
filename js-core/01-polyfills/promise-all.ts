/**
 * Polyfill: Promise.all
 * Handles: Array of promises/values, fail-fast on first rejection, preserving result ordering.
 */
function all(promises: Iterable<unknown>) {
  return new Promise((resolve, reject) => {
    if (!promises || typeof promises[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument must be iterable"));
    }

    const results: unknown[] = [];
    let completedCount = 0;
    const promisesArray = Array.from(promises);

    if (promisesArray.length === 0) {
      return resolve([]);
    }

    promisesArray.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = value;
          completedCount++;

          if (completedCount === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

export default all;
