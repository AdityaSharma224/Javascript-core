// Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array.

function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid; 

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }

    for (let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

}

function mergeSort(arr, left, right) {
    if (left >= right) return;

    let mid = Math.floor(left + (right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

function printArray(arr, size) {
    for (let i = 0; i < size; i++) {
        console.log(arr[i] + " ");
    }
};

const arr = [1, 3, 2, 5, 4, 7, 6];
mergeSort(arr, 0, arr.length - 1);

printArray(arr, arr.length);

// Time Complexity:
// Best, Worst, and Average Case: O(n log n)
// Space Complexity: O(n) (requires additional space for merging)
// Efficiency:
// Much more efficient for large datasets.
// Stable sort (preserves the relative order of equal elements).
// Used in applications where stability is important or when working with linked lists.