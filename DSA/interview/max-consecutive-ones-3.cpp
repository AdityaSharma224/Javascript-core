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

nums = {1,1,1,0,0,0,1,1,1,1,0}, k = 2
Step-by-Step Execution
l	r	nums[r]	zeroCount	Action	Max Length
0	0	1	0	Expand r	1
0	1	1	0	Expand r	2
0	2	1	0	Expand r	3
0	3	0	1	Expand r	4
0	4	0	2	Expand r	5
0	5	0	3 (> k)	Shrink l	-
1	6	1	2	Expand r	6
1	7	1	2	Expand r	7
1	8	1	2	Expand r	8
1	9	1	2	Expand r	9
1	10	0	3 (> k)	Shrink l	-
Final max length = 6.
