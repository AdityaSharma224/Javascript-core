// This problem can be efficiently solved using Kadane’s Algorithm variation for Maximum Product Subarray in O(n) time.

// Key Idea:
// Since multiplication is involved, negative numbers can flip the sign of a product.
// We need to track both the maximum and minimum product at every step because:
// A negative number can make the smallest product the largest if multiplied.
// A zero resets the product.
// We maintain:
// maxProd → Maximum product subarray ending at the current index.
// minProd → Minimum product subarray (can become maximum if a negative number is encountered).

#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int maxProduct(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return 0;

    int maxProd = nums[0], minProd = nums[0], result = nums[0];

    for (int i = 1; i < n; i++) {
        if (nums[i] < 0) swap(maxProd, minProd); // Swap because a negative number can turn min into max

        maxProd = max(nums[i], maxProd * nums[i]); // Update max product
        minProd = min(nums[i], minProd * nums[i]); // Update min product

        result = max(result, maxProd); // Store global max product
    }

    return result;
}

int main() {
    vector<int> nums1 = {2, 3, -2, 4};
    vector<int> nums2 = {-2, 0, -1};

    cout << "Max Product (Example 1): " << maxProduct(nums1) << endl; // Output: 6
    cout << "Max Product (Example 2): " << maxProduct(nums2) << endl; // Output: 0

    return 0;
}

// Time & Space Complexity:
// Time Complexity: O(n), as we iterate through nums only once.
// Space Complexity: O(1), using only constant extra space.