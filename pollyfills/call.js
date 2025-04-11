// The call() method is a predefined JavaScript method. 
// It can be used to invoke (call) a method with an owner object as an argument (parameter). 
// This allows borrowing methods from other objects, 
// executing them within a different context, overriding the default value, and passing arguments.

const person1 = {name:'aditya'};
const person2 = {name:'shubham'};

function introduce(age){
    return `Hi, I'm ${this.name} and I'm ${age} years old.`
};

//polyfill
Function.prototype.customCall = function(context,...args){
    if(typeof this !== "function"){
        throw new Error(this,"Invalid Call");
    }

    // Assigning the Function to the Context Object
    context.fnc = this; //this refers to the function that .newApply is being called on.
    const result = context.fnc(...args); // Calling the Function with Spread Arguments

    delete context.fnc;
    return result;
};

console.log(introduce.customCall(person1,22));