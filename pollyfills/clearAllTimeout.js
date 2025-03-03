window.timeoutIds = [];

// store the original method
const originalTimeoutFn = window.setTimeout;

//over-writing the original method
window.setTimeout = function(fn, delay) { 
  const id = originalTimeoutFn(fn, delay);
  timeoutIds.push(id);
  
  //return the id so that it can be originally cleared
  return id;
}

window.clearAllTimeout = function(){
  //clear all timeouts
  while(timeoutIds.length){
    clearTimeout(timeoutIds.pop());
  }
}

setTimeout(() => {console.log("hello")}, 2000);
setTimeout(() => {console.log("hello1")}, 3000);
setTimeout(() => {console.log("hello2")}, 4000);
setTimeout(() => {console.log("hello3")}, 5000);

clearAllTimeout();