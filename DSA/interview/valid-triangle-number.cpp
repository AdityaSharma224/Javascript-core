// Key Observations
// Sort the array: This ensures that if nums[i] ≤ nums[j] ≤ nums[k], then the largest element is at nums[k].
// Fix the largest element (nums[k]) and use two pointers (i and j) to find valid pairs:
// Start i = 0 and j = k-1.
// If nums[i] + nums[j] > nums[k], all elements between i and j can form valid triangles with nums[k] (since the array is sorted).
// Count them and move j left (j--).
// Else, increase i (i++).

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int triangleNumber(vector<int>& nums) {
    int n = nums.size();
    if (n < 3) return 0; // A triangle requires at least 3 sides

    sort(nums.begin(), nums.end()); // Step 1: Sort the array
    int count = 0;

    // Step 2: Iterate over possible largest sides
    for (int k = n - 1; k >= 2; k--) {
        int i = 0, j = k - 1;
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) { 
                count += (j - i); // All pairs between i and j are valid
                j--; // Move j left
            } else {
                i++; // Increase i if the condition fails
            }
        }
    }

    return count;
}

int main() {
    vector<int> nums1 = {2, 2, 3, 4};
    cout << "Output: " << triangleNumber(nums1) << endl; // Expected: 3

    vector<int> nums2 = {4, 2, 3, 4};
    cout << "Output: " << triangleNumber(nums2) << endl; // Expected: 4

    return 0;
}


// Time & Space Complexity
// Sorting: O(n log n)
// Two-pointer traversal: O(n²)
// Total Complexity: O(n²)
// Space Complexity: O(1) (modifies the input array for sorting)
