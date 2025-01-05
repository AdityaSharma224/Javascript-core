
function countingSort(arr,n){
    let maxData = 0;
    for(let i=0;i<n;i++){
        maxData = Math.max(maxData,arr[i]);
    }

    const countArray = new Array(maxData+1).fill(0);

    for(let i=0;i<n;i++){
        countArray[arr[i]]++;
    }

    for(let i=1;i<=maxData;i++){
        countArray[i]+=countArray[i-1];
    }

    const outPutArray = new Array(n);

    for(let i=n-1;i>=0;i--){
        outPutArray[countArray[arr[i]]-1] = arr[i];
        countArray[arr[i]]--;
    }
    return outPutArray;
}

function printArray(arr,size){
    for(let i=0;i<size;i++){
        console.log(arr[i] + " ");
    }
};

const arr = [1,3,2,5,4,7,6];
const ans = countingSort(arr,arr.length);
printArray(arr,arr.length);
console.log('sorted array - ',ans);