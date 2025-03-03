// Approach:
// Use a deque (implemented as an array) to store the indices of elements in nums.
// Maintain the deque such that:
// Remove elements from the front if they are out of the window’s range.
// Remove elements from the back if they are smaller than the current element (as they won’t be needed).
// The front of the deque always holds the index of the maximum element in the current window.
// Start storing the max values in the result array after filling the first window.

function maxSlidingWindow(nums, k) {
    if (!nums.length) return [];

    let result = [];
    let deque = []; // Store indices of useful elements

    for (let i = 0; i < nums.length; i++) {
        // Remove elements from the front if they are out of the window
        if (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements from the back if they are smaller than current element
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i); // Add current index

        // Start adding to result once the first window is complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Complexity Analysis
// Time Complexity: O(n)
// Each element is pushed and popped from the deque at most once.
// Space Complexity: O(k)
// The deque stores at most k elements.

//2------------------------------------------------------------------------------------------------
/Approach:
// Use a balanced data structure like a Sorted List (since JavaScript lacks a built-in multiset).
// Insert the first k elements into a sorted list.
// Get the maximum element (which is the last element in the sorted list).
// Slide the window, removing the leftmost element and inserting the new one while maintaining order.


class SortedList {
    constructor() {
        this.list = [];
    }

    insert(num) {
        let index = this._binarySearch(num);
        this.list.splice(index, 0, num);
    }

    remove(num) {
        let index = this._binarySearch(num);
        if (this.list[index] === num) {
            this.list.splice(index, 1);
        }
    }

    max() {
        return this.list[this.list.length - 1]; // Last element is the max
    }

    _binarySearch(target) {
        let left = 0, right = this.list.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (this.list[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}

function maxSlidingWindow(nums, k) {
    let n = nums.length;
    let sortedList = new SortedList();
    let result = [];

    // Insert first k elements
    for (let i = 0; i < k; i++) {
        sortedList.insert(nums[i]);
    }

    result.push(sortedList.max());

    for (let i = k; i < n; i++) {
        sortedList.remove(nums[i - k]); // Remove the element leaving the window
        sortedList.insert(nums[i]);     // Add the new element
        result.push(sortedList.max());  // Get the max of the window
    }

    return result;
}

// Insertion & Deletion in Sorted List: O(log k) each.
// Total operations for n elements: O(n log k).
// Overall Complexity: O(n log k), which is efficient for large inputs.