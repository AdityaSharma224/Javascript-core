
function selectionSort(arr,n){
    for(let i=0;i<n;i++){
        let mini = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[mini]){
                mini = j;
            }
        }
    let temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
    }
}

function printArray(arr,size){
    for(let i=0;i<size;i++){
        console.log(arr[i] + " ");
    }
};

const arr = [1,3,2,5,4,7,6];
selectionSort(arr,arr.length);
printArray(arr,arr.length);