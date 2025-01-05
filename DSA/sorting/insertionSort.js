
function insertionSort(arr,n){
    
   for(let i=1;i<n;i++){
    let j=i-1;
    let key = arr[i];
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j=j-1;
    }
    arr[j+1]=key;
   }
}

function printArray(arr,size){
    for(let i=0;i<size;i++){
        console.log(arr[i] + " ");
    }
};

const arr = [1,3,2,5,4,7,6];
insertionSort(arr,arr.length);
printArray(arr,arr.length);