//.filter() decide what kind of items do we want in the resulting array.

const arr = [1,2,3,4,5,6,7,8];

const filteredArray = arr.filter(item=>item%2==0);

Array.prototype.customFilter = function(callback){
    let output = [];
    for(let i =0;i<this.length;i++){
        if(callback(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}

const newoutput = arr.customFilter(item=>item%2==0);
console.log('arr',newoutput);
