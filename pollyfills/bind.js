// The bind() method returns a new function, when invoked, has its this sets to a specific value.
const objIntro ={
    name:"aditya",
    city:"rohtak"
}
    
    function sayIntro (company,place){
    console.log(`name is ${this.name}, place is ${this.city} and company is ${company} and work place is ${place} `)
    }

 let x  =  sayIntro.bind(objIntro,"cognizant","gurgaon")
 x();

// Function.prototype.newBind = function(context,args){
//     if(typeof this !== "function"){
//         throw new Error(this,"Invalid call");
//     }

//     context.fnc = this;
//     return function(...nextArgs){
//         context.fnc(...args,...nextArgs);
//     }
// }

// let x = sayIntro.newBind(objIntro,['cast','banglore'])
// x()

Function.prototype.call,myBind = function(context,args){
    
}