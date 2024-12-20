let checkEven = new Promise((resolve,reject) => {
    let num = 4;
    if(num % 2 === 0)resolve('This num is even!');
    else reject('The num is odd');
})

// .all()
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.
// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.resolve("Task 3 failed")
// ])

// .allSettled()
// Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.
// Promise.allSettled([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 failed"),
//     Promise.resolve("Task 3 completed")
// ])
//     .then((results) => console.log(results));

// .race()
// Promise.race() Method resolves or rejects as soon as the first promise settles.
// Promise.race([
//     new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 1000)),
//     new Promise((resolve) => setTimeout(() => resolve("Task 2 finished"), 500))
// ])
//     .then((result) => console.log(result));


// .any()
// Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.
// Promise.any([
//     Promise.reject("Task 1 failed"),
//     Promise.reject("Task 2 completed"),
//     Promise.reject("Task 3 completed")
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

// let arr = [1,2,3];

// arr.reduce((prev,curr)=>{
//     return prev.then(()=>{
//         return new Promise((resolve)=>{
//             console.log(
//                 `Processing item ${curr}`
//             );
//             setTimeout(resolve,1000);
//         });
//     });
// }, Promise.resolve())



