// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.

function bubbleSort(arr,n){
    for(let i=0;i<n;i++){
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(!swapped) return;
    }
}

function printArray(arr,size){
    for(let i=0;i<size;i++){
        console.log(arr[i]+" ");
    }
};

const arr = [1, 3, 2, 5, 4, 7, 6];
bubbleSort(arr, arr.length);
printArray(arr, arr.length);


// Time Complexity:
// Best Case(already sorted): O(n)
// Worst Case: O(n²)
// Average Case: O(n²)
// Space Complexity: O(1)(in -place)
// Efficiency:
// Very inefficient for large datasets.
// Only useful for small arrays or when the array is mostly sorted(best case).