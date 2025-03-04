// Your implementation is correct but highly inefficient due to its O(n³) time complexity. Here's why:

// The outer loop (i) runs from 0 to n-1.
// The middle loop (j) runs from i to n-1.
// The inner loop (k) sums the subarray from i to j.
// Thus, the overall complexity is O(n³), making it infeasible for large inputs.

int maxSubArray(vector<int>& nums) {
    int n = nums.size();
         int maxVal = INT_MIN;
    for(int i=0;i<n;i++)
    {
            for(int j=i;j<n;j++)
            {
                    int sum=0;
                    for(int k=i;k<=j;k++)
                    {
                            sum+=nums[k];
                    }
                    maxVal = max(maxVal,sum);
            }
    }
         return maxVal;
         
 }

// better

// Instead of iterating over all subarrays, Kadane's Algorithm efficiently finds the maximum sum in a single pass.

Use a variable sum to track the running subarray sum:
Add nums[i] to sum.
If sum exceeds max_value, update max_value.
If sum drops below 0, reset sum = 0 (discard negative sum).
Why reset sum = 0?
If sum becomes negative, it cannot contribute to a larger sum in future subarrays.
Resetting allows us to start fresh with a new subarray.

int maxSubArray(vector<int>& nums) {
    int n = nums.size();
    int max_value = INT_MIN;
    int sum = 0;
    for(int i=0;i<n;i++){
        sum+=nums[i];

        max_value=max(max_value,sum);
        if(sum<0){
            sum=0;
        }
    }
    return max_value;
}

int main() {
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << "Maximum Subarray Sum: " << maxSubArray(nums) << endl;
    return 0;
}