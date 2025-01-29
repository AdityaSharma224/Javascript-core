// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states
let checkEven = new Promise((resolve, reject) => {
    let num = 3;
    if (num % 2 === 0) resolve('This num is even!');
    else reject('The num is odd');
})

checkEven.then((message) => console.log(message)).catch((error) => console.log(error))

// .all()
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.
// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.resolve("Task 3 failed"),
// ]).then((results)=>console.log(results))

// .allSettled()
//Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.
// Promise.allSettled([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 failed"),
//     Promise.reject("Task 3 completed")
// ])
//     .then((results) => console.log(results));

// .race()
//Promise.race() Method resolves or rejects as soon as the first promise settles.
// Promise.race([
//     new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 500)),
//     new Promise((reject) => setTimeout(() => reject("Task 2 finished"), 1000))
// ]).then((result) => console.log(result));

// .any()
// Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.
// Promise.any([
//     new Promise((reject) => setTimeout(() => reject("finsied1"), 1000)),
//     new Promise((reject) => setTimeout(() => reject("finsied2"), 500)),
//     new Promise((reject) => setTimeout(() => reject("finsied3"), 5000)),
// ])
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));

//.finally()
//Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result (fulfilled or rejected).
// Promise.resolve("Task completed")
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Cleanup completed"));

// chaning with Promise
// Promise.resolve(5)
//     .then((value) => value * 2) // Multiplies by 2
//     .then((value) => value + 3) // Adds 3
//     .then((finalValue) => console.log(finalValue)); // Logs: 13


// Sequential Execution with Array.prototype.reduce()

let arr = [1,2,3,4,5,6,7,8];

arr.reduce((prev,curr)=>{
    return prev.then(()=>{
        return new Promise((resolve)=>{
            console.log(
                `Processing item ${curr}`
            );
            setTimeout(resolve,2000);
        });
    });
}, Promise.resolve())

function customPromise(executor) {
    let onResolve, onReject, isCalled = false, 
        isFulfilled = false, isRejected = false, output, err;
  
    this.then = function(resolveCallback) {
      onResolve = resolveCallback;
      
      if(!isCalled && isFulfilled) {
        isCalled = true;
        onResolve(output);
      }
      return this;
    }
    
    this.catch = function(rejectCallback) {
      onReject = rejectCallback;
      
      if(!isCalled && isRejected) {
        isCalled = true;
        onReject(err);
      }
      return this;
    }
  
    function resolver(data) {
      isFulfilled = true;
      output = data;
      
      if(typeof onResolve=== 'function' && !isCalled){
        isCalled = true;
        onResolve(data);
      }
    }
    
    function rejecter(error) {
      isRejected = true;
      err = error;
      
      if(typeof onReject === 'function' && !isCalled){
        isCalled = true;
        onReject(error);
      }
    }
    
    executor(resolver, rejecter);
  }

  let p1 = new customPromise(
    (resolve, reject) => setTimeout(() => resolve('Resolved successfully', 1000))
  );
  p1.then((data) => console.log(data));
  
  let p2 = new customPromise(
    (resolve, reject) => resolve('Resolved right away');
  );
  p2.then((data) => console.log(data));

