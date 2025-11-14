// reduce() function is used to reduce the array to a single value.

const array = [1, 2, 3, 4, 5];

function addition(accumulator, current) {
    accumulator = accumulator + current;
    return accumulator;
}

// // Adding a custom reduce method to the Array prototype
// Array.prototype.newReduce = function (callback, initialValue) {
//     // Initialize the accumulator
//     // If initialValue is provided, use it; otherwise, set accumulator to undefined
//     var accumulator = initialValue === undefined ? undefined : initialValue;

//     // Iterate over the array elements
//     for (let i = 0; i < this.length; i++) {
//         if (accumulator !== undefined) {
//             // If accumulator is already initialized, apply the callback function
//             accumulator = callback.call(undefined, accumulator, this[i], i, this);
//         } else {
//             // If no initialValue is provided, take the first element as the accumulator
//             accumulator = this[i];
//         }
//     }

//     // Return the final accumulated value
//     return accumulator;
// };


// const sum = array.reduce((acc, curr) => acc + curr, 0);

// console.log(sum)

// Array.prototype.customReduce = function(callBack,initialValue){
//     var accumulator = initialValue === undefined ? undefined : initialValue;
//     for(let i=0;i<this.length;i++){
//         if(accumulator!==undefined){
//             accumulator = callBack.call(undefined,accumulator,this[i],i,this);
//         }else{
//             accumulator = this[i];
//         }
//     }
//     return accumulator;
// }

const sum = array.customReduce((acc,curr)=>acc+curr,0);
console.log('sum',sum);


Array.prototype.customReduce = function(callBack, initialValue){
    var accumulator = initialValue === undefined ? undefined : initialValue;
    for(let i=0;i<this.length;i++){
        if(accumulator!==undefined){
            accumulator = callBack.call(undefined, accumulator, this[i],i,this);
        }else{
            accumulator = this[i];
        }
    }
    return accumulator;
}