// Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.

function selectionSort(arr,size){
    for(let i=0;i<size;i++){
        let mini = i;
        for(let j=i+1;j<size;i++){
            if(arr[j]<arr[mini]){
                mini = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[mini];
        arr[mini] = temp;
    }
}

function printArray(arr, size) {
    for (let i = 0; i < size; i++) {
        console.log(arr[i] + " ");
    }
};

const arr = [1, 3, 2, 5, 4, 7, 6];
selectionSort(arr, arr.length);
printArray(arr, arr.length);

// Time Complexity:
// Best, Worst, and Average Case: O(n²) (always scans the entire array to find the smallest element).
// Space Complexity: O(1) (in-place)
// Efficiency:
// Not very efficient, as it always takes quadratic time regardless of input.
// Better than bubble sort for arrays with fewer swaps.