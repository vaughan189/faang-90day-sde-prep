const functionPrototype = Function.prototype as any;

functionPrototype.myCall = function (
  this: (...args: any[]) => any,
  thisArg: any,
  ...argArray: any[]
) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myCall - what is being compiled is not callable",
    );
  }

  const context =
    thisArg === null || thisArg === undefined ? globalThis : Object(thisArg);

  const uniqueKey = Symbol("fn");

  Object.defineProperty(context, uniqueKey, {
    value: this,
    configurable: true,
    enumerable: false,
    writable: false,
  });

  const result = context[uniqueKey](...argArray);

  delete context[uniqueKey];
  return result;
};
