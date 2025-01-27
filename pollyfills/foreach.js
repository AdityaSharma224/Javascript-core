// The forEach() executes the callback function on each element of array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function consoleFunc(x) {
    console.log(x);
}

Array.prototype.ourForEach = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i]);
    }
};

const ans = arr.ourForEach(consoleFunc);
