// reduce() function is used to reduce the array to a single value.

const array = [1, 2, 3, 4, 5];

function addition(accumulator, current) {
    accumulator = accumulator + current;
    return accumulator;
}

// Array.prototype.newReduce = function (callback, initialValue) {
//     var accumulator = initialValue === undefined ? undefined : initialValue;

//     for (let i = 0; i < this.length; i++) {
//         if (accumulator !== undefined) {
//             accumulator = callback.call(undefined, accumulator, this[i], i, this);
//         } else {
//             accumulator = this[i];
//         }
//     }
//     return accumulator;
// }

const sum = array.reduce((acc, curr) => acc + curr, 0);

console.log(sum)