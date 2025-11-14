// What Promise.all Does

// Promise.all(iterable) takes an array (or iterable) of promises and:

// Resolves when all promises succeed, returning an array of their values.

// Rejects immediately if any promise rejects (with that rejection reason).

if (!Promise.all) {
  Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }

      let results = [];
      let completed = 0;

      if (promises.length === 0) {
        return resolve([]); // resolve immediately for empty array
      }

      promises.forEach((p, index) => {
        // Use Promise.resolve() to handle non-promise values
        Promise.resolve(p)
          .then((value) => {
            results[index] = value;
            completed += 1;

            // resolve when all are done
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch(reject); // reject immediately on first failure
      });
    });
  };
}


if(!Promise.all){
  Promise.all = function(promises){
    return new Promise((resolve,reject)=>{
      if(!Array.isArray(promises)){
        return reject(new TypeError('Argument must be an array'));
      }


      let results = [];
      let completed = 0;


      promises.forEach((p, index)=>{
        Promise.resolve(p)
        .then((value)=>{
          results[index] = value;
          completed += 1;


          if(completed === promises.length){
            resolve(results);
          }
        })
        .catch(reject);
      })
    })
  }
}