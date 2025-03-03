const customFunc = (function(){
    function x(){alert("Hi")}

    x.toString = function(){
      return "start:"+Function.prototype.toString.call(x) + ":end";
    };
    return x;
  })();
  console.log(1+customFunc);


