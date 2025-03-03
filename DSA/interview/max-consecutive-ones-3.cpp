// Approach: Sliding Window
// Use a left pointer (l) and a right pointer (r) to maintain a sliding window.
// Expand r while keeping track of how many 0s are in the window.
// If the number of 0s exceeds k, move the l pointer to the right until the count of 0s is within k.
// Keep track of the maximum window size.


#include <iostream>
#include <vector>

using namespace std;

int longestOnes(vector<int>& nums, int k) {
    int l = 0, maxLength = 0, zeroCount = 0;

    for (int r = 0; r < nums.size(); r++) {
        if (nums[r] == 0) zeroCount++; // Count the zeros in the window

        while (zeroCount > k) {  // If zeros exceed k, shrink the window
            if (nums[l] == 0) zeroCount--;
            l++;
        }

        maxLength = max(maxLength, r - l + 1); // Update max length
    }

    return maxLength;
}

int main() {
    vector<int> nums1 = {1,1,1,0,0,0,1,1,1,1,0};
    int k1 = 2;
    cout << "Output: " << longestOnes(nums1, k1) << endl; // Expected: 6

    vector<int> nums2 = {0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1};
    int k2 = 3;
    cout << "Output: " << longestOnes(nums2, k2) << endl; // Expected: 10

    return 0;
}


// Time & Space Complexity
// Time Complexity: O(n) → Each element is processed at most twice (once when expanding r, once when moving l).
// Space Complexity: O(1) → No extra space is used.
