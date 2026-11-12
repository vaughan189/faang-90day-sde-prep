/**
 * Polyfill: Promise.race
 * Handles: Resolving or rejecting as soon as any promise settles.
 */
function race(promises: Iterable<unknown>) {
  return new Promise((resolve, reject) => {
    if (promises && typeof promises[Symbol.iterator] !== "function") {
      return reject("Argument not an iterable");
    }

    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
}
export default race;
