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

    if (!Array.isArray(args)) {
        throw new Error('arguments are not in array');
    }
    context.fnc = this;
    context.fnc(...args);
}


let student = {
    details: function (section, rollnum) {
        console.log(this.name + " " + this.class + " " + section + " " + rollnum);
    }
}

let stud1 = {
    name: 'Aditya',
    class: '11th',
}

student.details.newApply(stud1, ['C', 21])
