// const array = [1, [2, [7, 8], 3], [4, 5]];

// function flattenArray(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flattenArray(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }


// using reduce
// const arr = [1, [2, [3, [4]], 5]];
// const flatten = (array) => 
//   array.reduce((acc, val) => 
//     Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), 
//     []
//   );
// console.log(flatten(arr));

// using stack
// const arr = [1, [2, [3, [4]], 5]];
// const flatten = (array) => {
//   const stack = [...array];
//   const result = [];
//   while (stack.length) {
//     const next = stack.pop();
//     if (Array.isArray(next)) {
//       stack.push(...next);
//     } else {
//       result.push(next);
//     }
//   }
//   return result.reverse();
// };
// console.log(flatten(arr));