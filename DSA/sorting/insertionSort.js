// Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list
function insertionSort(arr,n){
    
   for(let i=1;i<n;i++){
    let j=i-1;
    let key = arr[i];
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j=j-1;
    }
}

function printArray(arr, size) {
    for (let i = 0; i < size; i++) {
        console.log(arr[i] + " ");
    }
};

const arr = [1, 3, 2, 5, 4, 7, 6];
insertionSort(arr, arr.length);
printArray(arr, arr.length);

// Time Complexity:
// Best Case (already sorted): O(n)
// Worst Case: O(n²)
// Average Case: O(n²)
// Space Complexity: O(1) (in-place)
// Efficiency:
// Efficient for small or nearly sorted arrays.
// Used in practice for small datasets (even as part of other algorithms like hybrid sorts).