// Approach 1: Max Heap (Priority Queue) - O(n log k)
// Key Observations
// Compute the distance: We only need to compare squared distances (x² + y²) to avoid unnecessary square roots.
// Use a max heap (priority queue):
// Push points into the heap with their squared distance as the key.
// Maintain only k closest points in the heap (pop the farthest when size > k).


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
