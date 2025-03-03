// const customFunc = (function(){
//     function x(){alert("Hi")}

//     x.toString = function(){
//       return "start:"+Function.prototype.toString.call(x) + ":end";
//     };
//     return x;
//   })();
//   console.log(1+customFunc);

// function sum(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }


const a = { b: true };
console.log(a.b || 'present');
