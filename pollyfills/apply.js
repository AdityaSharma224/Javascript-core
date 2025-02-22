// The Function.prototype.apply() method allows you to call a function with a given this value and arguments provided as an array.

// let student = {
//     details:function(section,rollnum){
//         console.log( this.name + " " + this.class + " " + section + " " + rollnum);
//     }
// }

// let stud1 = {
//     name:'Aditya',
//     class:'11th',
// }

// student.details.apply(stud1,['C',21])

// Function.prototype.newApply = function(context,args){
//     if(typeof this !== "function"){
//         throw new Error(this,'Invalid call');
//     }

//     if(!Array.isArray(args)){
//         throw new Error('arguments are not in array');
//     }

//     context.fnc = this;
//     context.fnc(...args);
// }


// let student = {
//     details:function(section,rollnum){
//         console.log( this.name + " " + this.class + " " + section + " " + rollnum);
//     }
// }

// let stud1 = {
//     name:'Aditya',
//     class:'11th',
// }

// student.details.newApply(stud1,['C',21])

let students = {
    details:function(section,rollnum){
        console.log(this.name + " " + this.class + " " + section + " " + rollnum);
    }
}

Function.prototype.customApply = function(context,args){
    if(typeof this!== "function") throw new Error(this,'Invalid call');

    if(!Array.isArray(args)){
        throw new Error('arguments are not in array');
    }
    context.fnc = this;
    context.fnc(...args);
}

let stud1 = {
    name:'aditya',
    class:'11th'
}

students.details.customApply(stud1,['C',2])

// let nestedArray = [1, [2, 3], [4, 5]];
// let flattened = [].concat.apply([], nestedArray);
// console.log(flattened); // Output: [1, 2, 3, 4, 5]

function sumAll() {
    let sum = Array.prototype.reduce.apply(arguments, [
        (acc, val) => acc + val, 
        0
    ]);
    console.log(sum);
}

sumAll(1, 2, 3, 4); // Output: 10