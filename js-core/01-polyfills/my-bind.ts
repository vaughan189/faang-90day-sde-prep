const functionPrototype = Function.prototype as any;

functionPrototype.myBind = function (thisArg: any, ...boundArgs: any[]) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myBind - what is being bound is not callable",
    );
  }

  const originalFunction = this;

  return function (...laterArgs: any[]) {
    const finalArgs = [...boundArgs, ...laterArgs];

    return originalFunction.apply(thisArg, finalArgs);
  };
};

export {};
