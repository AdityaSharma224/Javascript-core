// The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter). This allows borrowing methods from other objects, executing them within a different context, overriding the default value, and passing arguments.

// let employee = {
//     details: function (designation, experience) {
//         return this.name
//             + " "
//             + this.id
//             + designation
//             + experience;
//     }
// }

// // Objects declaration
// let emp1 = {
//     name: "A",
//     id: "123",
// }
// let emp2 = {
//     name: "B",
//     id: "456",
// }
// let x = employee.details.call(emp2, " Manager ", "4 years");
// console.log(x);

// function name(city){
//     console.log(`${this.name} name and place is ${city}`);
// }

// const objName= {
//     name:'rahul'
// }

// name.call(objName,'gwalior');

Function.prototype.newCall = function(context,...args){
    if(typeof this !== "function"){
        throw new Error(this,"invalid call");
    }

    context.fnc = this;
    context.fnc(...args);
}

function name(city){
    console.log(`${this.name} name and place is ${city}`);
}

const objName = {
    name:'Aditya'
}

name.newCall(objName,'Rohtak')