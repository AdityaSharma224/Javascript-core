Approach
1. Edge Case Handling
Compute total sum → If sum(nums) % k != 0, return false (not divisible).
2. Backtracking Approach
Sort nums in descending order (Greedy optimization).
Use recursion to place each number in a subset:
Try placing nums[index] in each subset.
If a subset reaches the target, move to the next number.
If all numbers are placed, return true.
3. Optimizations
Sorting in Descending Order: Helps fit large numbers early, reducing backtracking.
Avoiding Empty Subsets: If a number doesn’t fit in an empty subset, break early to avoid redundant calls.

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool canPartition(vector<int>& nums, vector<int>& subsets, int index, int target) {
    if (index == nums.size()) {
        return true; // If all numbers are placed, return true
    }

    int num = nums[index]; // Pick the current number
    for (int i = 0; i < subsets.size(); i++) {
        if (subsets[i] + num <= target) {
            subsets[i] += num; // Place in subset i
            if (canPartition(nums, subsets, index + 1, target)) {
                return true;
            }
            subsets[i] -= num; // Backtrack
        }
        
        if (subsets[i] == 0) break; // Optimization: Don't try empty subsets again
    }
    
    return false;
}

bool canPartitionKSubsets(vector<int>& nums, int k) {
    int totalSum = accumulate(nums.begin(), nums.end(), 0);
    if (totalSum % k != 0) return false; // Cannot be divided equally

    int target = totalSum / k;
    sort(nums.rbegin(), nums.rend()); // Sort in descending order (greedy optimization)

    vector<int> subsets(k, 0);
    return canPartition(nums, subsets, 0, target);
}

int main() {
    vector<int> nums1 = {4,3,2,3,5,2,1};
    int k1 = 4;
    cout << "Output: " << (canPartitionKSubsets(nums1, k1) ? "true" : "false") << endl; // Expected: true

    vector<int> nums2 = {1,2,3,4};
    int k2 = 3;
    cout << "Output: " << (canPartitionKSubsets(nums2, k2) ? "true" : "false") << endl; // Expected: false

    return 0;
}

nums = {4,3,2,3,5,2,1}, k = 4
Total Sum = 20, Target per subset = 5
Sorted nums = [5,4,3,3,2,2,1]
Step	Current Subset Sums	Placement
1	[5,0,0,0]	Place 5 in subset 1
2	[5,4,0,0]	Place 4 in subset 2
3	[5,4,3,0]	Place 3 in subset 3
4	[5,4,3,3]	Place 3 in subset 4
5	[5,5,3,3]	Place 2 in subset 2
6	[5,5,5,3]	Place 2 in subset 3
7	[5,5,5,5]	Place 1 in subset 4
