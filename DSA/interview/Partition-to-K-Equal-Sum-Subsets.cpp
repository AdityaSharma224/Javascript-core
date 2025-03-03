// Key Observations
// Total Sum Check:

// If sum(nums) % k != 0, return false immediately since equal partitioning is impossible.
// The target sum for each subset should be target = sum(nums) / k.
// Sorting + Backtracking:

// Sort nums in descending order to fill subsets faster and avoid redundant calculations.
// Use DFS with backtracking to try placing each number into available subsets.
// Optimized Approach: Backtracking + Bitmasking
// Steps
// Compute sum(nums), and if it's not divisible by k, return false.
// Sort nums in descending order (to fill subsets faster).
// Use backtracking:
// Try placing each number in a subset.
// If a subset exceeds target, backtrack.
// If k-1 subsets are correctly filled, the last subset must also be correct.

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
