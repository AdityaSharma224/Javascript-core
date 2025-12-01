if (!Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return Promise.all(
      promises.map(p =>
        Promise.resolve(p)
          .then(value => ({
            status: "fulfilled",
            value
          }))
          .catch(reason => ({
            status: "rejected",
            reason
          }))
      )
    );
  };
}
