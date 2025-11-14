// .map() is very much similar to .forEach() method, except,
// instead of returning items out of the array, it return the array itself

const array = [1, 2, 3, 4, 5, 6, 7];

// Polyfill
// Array.prototype.newMap = function(callback){ // create new method
//     const newArray = [];
//     for(let i=0;i<this.length;i++){ // this refers to parent and here it's array
//         newArray.push(callback(this[i]));
//     }
//     return newArray;
// }

Array.prototype.customMap = function (callBack, thisArg) {

    if (typeof callBack !== "function") {
        throw new TypeError(`${callBack} is not a fucntion`)
    }
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            // The .call() method allows us to explicitly set this inside callBack.
            // This ensures that the callback function executes in the correct context.
            newArray.push(callBack.call(thisArg, this[i], i, this));
        }
    }
    return newArray;
}

const transform = array.customMap(item => item * 2);
console.log('ans', transform);


Array.prototype.myMap = function(callback, thisArg){

    if(typeof callback !== "function"){
        throw new TypeError(`${callback} is not a function`)
    }

    const newArray = [];
    for(let i=0;i<this.length;i++){
        if(i in this){
            newArray.push(callback.call(thisArg, this[i], i, this));
        }
    }
    return newArray;
}