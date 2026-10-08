const functionPrototype = Function.prototype as any;

functionPrototype.myApply = function (
  thisArg: unknown,
  argArray: unknown[] | null | undefined,
) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myApply - what is being called is not callable",
    );
  }

  const context =
    thisArg === null || thisArg === undefined ? globalThis : Object(thisArg);

  const uniqueKey = Symbol("fn");

  Object.defineProperties(context, {
    [uniqueKey]: {
      value: this,
      configurable: true,
      enumerable: false,
      writable: false,
    },
  });

  const result =
    argArray === null || argArray === undefined
      ? context[uniqueKey]()
      : context[uniqueKey](...argArray);

  delete context[uniqueKey];
  return result;
};
