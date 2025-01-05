
function relativeSort(arr1,arr2){
    let result = [];
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(arr1[j] === arr2[i]){
                result.push(arr1[j]);
                arr1[j]= - 1;
            }
        }
    }

    arr1.sort((a,b)=>a-b);

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==-1){
            result.push(arr1[i]);
        }
    }
    return result;
}

function printArray(arr,size){
    for(let i=0;i<size;i++){
        console.log(arr[i] + " ");
    }
};

const arr1 =  [2,3,1,3,2,4,6,7,9,2,19];
const arr2 = [2,1,4,3,9,6];
const ans = relativeSort(arr1,arr2);

console.log('sorted array - ',ans);