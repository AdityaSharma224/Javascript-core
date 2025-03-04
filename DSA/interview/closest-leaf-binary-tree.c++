// Approach
// Build a Graph Representation:
// we can solve this using BFS (Breadth-First Search) and DFS (Depth-First Search). The idea is to treat the problem as a graph traversal problem:

// Approach:
// Build a Graph Representation:

// Convert the tree into an undirected graph so that we can traverse both upwards and downwards.
// Use an unordered_map to store parent-child relationships.
// Find the Target Node:

// Use DFS to locate the target node.
// Perform BFS to Find the Nearest Leaf:

// Start from the target node and perform a BFS traversal.
// The first leaf node encountered in BFS will be the closest.

#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <queue>

using namespace std;

// Definition of a tree node
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    
    // Constructor to initialize node
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

// Helper function to build an adjacency list for the tree (graph representation)
void buildGraph(TreeNode* node, unordered_map<int, vector<int>>& graph, 
                unordered_map<int, TreeNode*>& nodeMap, TreeNode* parent = nullptr) {
    if (!node) return;

    // Map the node value to the actual TreeNode pointer
    nodeMap[node->val] = node;

    // Create bidirectional edges in the adjacency list (undirected graph)
    if (parent) {
        graph[node->val].push_back(parent->val);
        graph[parent->val].push_back(node->val);
    }

    // Recursively build graph for left and right child nodes
    if (node->left) buildGraph(node->left, graph, nodeMap, node);
    if (node->right) buildGraph(node->right, graph, nodeMap, node);
}

// Function to find the nearest leaf node from the given target node `k`
int findNearestLeaf(TreeNode* root, int k) {
    if (!root) return -1;

    unordered_map<int, vector<int>> graph;  // Adjacency list representation of the tree
    unordered_map<int, TreeNode*> nodeMap;  // Map to retrieve TreeNode from its value

    // Convert tree into graph representation
    buildGraph(root, graph, nodeMap);

    // BFS setup
    queue<int> q;
    unordered_set<int> visited;

    q.push(k);          // Start BFS from the target node
    visited.insert(k);  // Mark it as visited

    // Perform BFS to find the nearest leaf
    while (!q.empty()) {
        int nodeVal = q.front();
        q.pop();

        TreeNode* node = nodeMap[nodeVal];

        // If the current node is a leaf node, return its value
        if (!node->left && !node->right) return nodeVal;

        // Traverse all connected nodes (neighbors in the graph)
        for (int neighbor : graph[nodeVal]) {
            if (visited.find(neighbor) == visited.end()) {
                q.push(neighbor);
                visited.insert(neighbor);
            }
        }
    }

    return -1; // This case should never occur for a valid tree
}

// Example usage
int main() {
    // Construct the tree:
    /*
          1
         / \
        3   2
    */
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(3);
    root->right = new TreeNode(2);

    int k = 1;
    cout << "Nearest leaf to " << k << " is: " << findNearestLeaf(root, k) << endl;
    
    return 0;
}

1
     / \
    3   2
Target Node (k = 1)

Step 1: Convert Tree to Graph
Using buildGraph(), we create an adjacency list:

Node	Neighbors
1	3, 2
3	1
2	1
Also, we store references to actual nodes in nodeMap.

Step 2: Perform BFS to Find Nearest Leaf
Start BFS from Node 1

Queue: [1]
Visited: {1}
Node 1 is not a leaf. Explore its neighbors 3 and 2.
Visit Node 3

Queue: [3]
Visited: {1, 3}
Node 3 is a leaf. Return 3.

Nearest leaf to 1 is: 3
Time Complexity Analysis
Building the graph takes O(N) time, where N is the number of nodes.
BFS traversal takes O(N) in the worst case.
Overall Complexity: O(N)
Space Complexity Analysis
Graph storage (Adjacency List): O(N)
Node Mapping: O(N)
Queue and Visited Set: O(N) (in the worst case)
Total Space Complexity: O(N)