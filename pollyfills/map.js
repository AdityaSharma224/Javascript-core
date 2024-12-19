// .map() is very much similar to .forEach() method, except, instead of returning items out of the array, it return the array itself

const array = [1,2,3,4,5,6,7];

// Polyfill
// Array.prototype.newMap = function(callback){ // create new method
//     const newArray = [];
//     for(let i=0;i<this.length;i++){ // this refers to parent and here it's array
//         newArray.push(callback(this[i]));
//     }
//     return newArray;
// }

// with error handling

Array.prototype.newMap = function(callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
    }

    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) { // Handle sparse arrays
            newArray.push(callback.call(thisArg, this[i], i, this));
        }
    }
    return newArray;
};

//array.map((value, index, array) => { /* ... */ });

const transform = array.newMap(item => item*2);
console.log('ans',transform);