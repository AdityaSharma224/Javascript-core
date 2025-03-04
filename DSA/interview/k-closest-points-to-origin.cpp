// Approach 1: Max Heap (Priority Queue) - O(n log k)
// Key Observations
// Compute the distance: We only need to compare squared distances (x² + y²) to avoid unnecessary square roots.
// Use a max heap (priority queue):
// Push points into the heap with their squared distance as the key.
// Maintain only k closest points in the heap (pop the farthest when size > k).


Explanation of the Code
The function kClosest finds the k closest points to the origin (0,0) using Euclidean distance.

Approach
Max Heap (Priority Queue)

Stores pairs {distance, point} where distance is squared Euclidean distance:
distance

Max heap ensures the k closest points remain.
If heap size exceeds k, remove the farthest point.
Extract the k closest points

Pop elements from the heap and store them in result.

#include <iostream>
#include <vector>
#include <queue>

using namespace std;

vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    // Max heap: stores {distance, point}
    priority_queue<pair<int, vector<int>>> maxHeap;

    for (const auto& p : points) {
        int dist = p[0] * p[0] + p[1] * p[1]; // Squared Euclidean distance
        maxHeap.push({dist, p});
        if (maxHeap.size() > k) {
            maxHeap.pop(); // Remove farthest point
        }
    }

    // Extract k closest points
    vector<vector<int>> result;
    while (!maxHeap.empty()) {
        result.push_back(maxHeap.top().second);
        maxHeap.pop();
    }

    return result;
}

int main() {
    vector<vector<int>> points1 = {{1,3}, {-2,2}};
    int k1 = 1;
    vector<vector<int>> result1 = kClosest(points1, k1);
    
    cout << "Output: ";
    for (const auto& p : result1) {
        cout << "[" << p[0] << "," << p[1] << "] ";
    }
    cout << endl;

    vector<vector<int>> points2 = {{3,3}, {5,-1}, {-2,4}};
    int k2 = 2;
    vector<vector<int>> result2 = kClosest(points2, k2);
    
    cout << "Output: ";
    for (const auto& p : result2) {
        cout << "[" << p[0] << "," << p[1] << "] ";
    }
    cout << endl;

    return 0;
}

Pushing n elements into heap	
𝑂
(
𝑛
log
⁡
𝑘
)
O(nlogk)
Extracting k elements	
𝑂
(
𝑘
log
⁡
𝑘
)
O(klogk)
Overall Complexity	
𝑂
(
𝑛
log
⁡
𝑘
)
O(nlogk)


points = {{1,3}, {-2,2}}
k = 1
Step-by-Step Execution
Push points into the heap

Point (1,3) → Distance = 1² + 3² = 10
Point (-2,2) → Distance = (-2)² + 2² = 8
Max Heap After Insertions

maxHeap = [{10, {1,3}}, {8, {-2,2}}]
Since size > k, remove (1,3) (farthest point).
Extract k closest points

Remaining heap: {8, {-2,2}}
Output: [[-2,2]]