// function useMyMemo(fn, dependencies) {
//     let result = fn();
//     let prevDependencies = dependencies;

//     if (!dependencies.every((val, i) => val === prevDependencies[i])) {
//         result = fn();
//         prevDependencies = dependencies;
//     }
//     return result;
// }

// function addition(arg1, arg2, arg3, arg4) {
//     return arg1 + arg2 + arg3 + arg4;
// }

// function curriedFunction(arg1) {
//     return function (arg2) {
//         return function (arg3) {
//             return function (arg4) {
//                 return arg1 + arg2 + arg3 + arg4;
//             }
//         }
//     }
// }

// const curriedArrowFunction = arg1 => arg2 => arg3 => arg4 => arg1 + arg2 + arg3 + arg4;

// console.log(curriedArrowFunction(1)(2)(3)(4));



console.log("hello" || "world")
console.log("foo" && "bar")
