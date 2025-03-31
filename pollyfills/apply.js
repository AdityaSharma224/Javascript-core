// In JavaScript, the .apply() method is used to invoke a
// function with a specified this value and arguments
// provided as an array (or an array-like object).

const person1 = {name:'aditya'};
const person2 = {name:'shubham'};

function introduce(age){
    return `Hi, I'm ${this.name} and I'm ${age} years old.`
};

//polyfill

Function.prototype.customApply = function(context,args){
    if(typeof this !== "function"){
        throw new Error(this,"Invalid Call");
    }

    if(!Array.isArray(args)){
        throw new Error("args are are not in array");
    }
    // Assigning the Function to the Context Object
    context.fnc = this; //this refers to the function that .newApply is being called on.
    const result = context.fnc(...args); // Calling the Function with Spread Arguments

    delete context.fnc;
    return result;
};

console.log(introduce.customApply(person1,[22]));