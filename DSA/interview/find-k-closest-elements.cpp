// Approach:
// Binary Search: Find the closest position to x in the sorted array.
// Two-Pointer Expansion: Expand left and right from that position to get the k closest elements.
// Sorting: The final list should be sorted in ascending order.

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

//If the input array is already sorted, we can use a two-pointer approach for better efficiency.
vector<int> findClosestElements(vector<int>& arr, int k, int x) {
    int left = 0, right = arr.size() - k;
    
    // Use binary search to find the starting index
    while (left < right) {
        int mid = left + (right - left) / 2;
        // Compare distances to x
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // Return k closest elements
    return vector<int>(arr.begin() + left, arr.begin() + left + k);
}

// Test function
int main() {
    vector<int> arr1 = {1,2,3,4,5};
    int k1 = 4, x1 = 3;
    vector<int> result1 = findClosestElements(arr1, k1, x1);
    for (int num : result1) cout << num << " ";
    cout << endl;

    vector<int> arr2 = {1,1,2,3,4,5};
    int k2 = 4, x2 = -1;
    vector<int> result2 = findClosestElements(arr2, k2, x2);
    for (int num : result2) cout << num << " ";
    cout << endl;

    return 0;
}


Approach
Use a Max-Heap (priority_queue<pair<int, int>>):

Store elements as {abs(arr[i] - x), arr[i]}.
The priority queue (max-heap) ensures that the element farthest from x is at the top.
If the size of the heap exceeds k, remove the top element (farthest).
Extract k closest elements:

Pop all elements from the heap and store them in the result array.
Sort the result:

Since elements are stored in an unordered manner in the heap, sort them before returning.
Time Complexity
Heap operations: O(N log K), since inserting an element into a heap of size k takes O(log K).
Extracting elements: O(K log K), since sorting K elements takes O(K log K).
Total Complexity: O(N log K)

vector<int> findClosestElements(vector<int>& arr, int k, int x) {
    priority_queue<pair<int,int>>pq;
    vector<int>ans;
        
    for(int i=0;i<arr.size();i++)
    {
            pq.push({abs(arr[i]-x),arr[i]});
            
            if(pq.size()>k)
            {
                    pq.pop();
            }
            
            
    }
        while(k)
        {
                ans.push_back(pq.top().second);
                pq.pop();
                        k--;
        }
        sort(ans.begin(),ans.end());
        return ans;
        
        
        
}
