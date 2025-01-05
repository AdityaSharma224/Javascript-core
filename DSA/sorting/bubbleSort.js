
function bubbleSort(arr,n){
    
    for(let i=0;i<n;i++){
        let swapped = false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        } 
        if(!swapped)return;
    }
}

function printArray(arr,size){
    for(let i=0;i<size;i++){
        console.log(arr[i] + " ");
    }
};

const arr = [1,3,2,5,4,7,6];
bubbleSort(arr,arr.length);
printArray(arr,arr.length);