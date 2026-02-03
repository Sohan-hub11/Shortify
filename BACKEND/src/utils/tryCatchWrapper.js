export default function wrapAsync(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      if (typeof next === "function") {
        return next(err);
      }
      throw err;
    });
  };
}
