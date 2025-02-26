// Approach
// Build a Graph Representation:

// Since we may need to traverse up the tree (not just down), we convert the tree into an undirected graph using an adjacency list.
// Each node stores its connections (left child, right child, and parent).
// Find the Target Node:

// Locate the node with value k.
// Perform BFS to Find the Nearest Leaf:

// Starting from the target node, we perform a BFS traversal to find the nearest leaf node (a node with no children).

#include < iostream >
    #include < unordered_map >
    #include < unordered_set >
    #include < queue >

    using namespace std;

struct TreeNode {
    int val;
    TreeNode * left;
    TreeNode * right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) { }
};

// Helper function to build an adjacency list for graph representation
void buildGraph(TreeNode * node, unordered_map < int, vector < int >>& graph, unordered_map < int, TreeNode *>& nodeMap, TreeNode * parent = nullptr) {
    if (!node) return;

    // Map node value to TreeNode
    nodeMap[node -> val] = node;

    // Create bidirectional edges (undirected graph)
    if (parent) {
        graph[node -> val].push_back(parent -> val);
        graph[parent -> val].push_back(node -> val);
    }

    if (node -> left) buildGraph(node -> left, graph, nodeMap, node);
    if (node -> right) buildGraph(node -> right, graph, nodeMap, node);
}

// BFS to find the nearest leaf from target node
int findNearestLeaf(TreeNode * root, int k) {
    if (!root) return -1;

    unordered_map < int, vector < int >> graph;
    unordered_map < int, TreeNode *> nodeMap;

    // Build graph representation
    buildGraph(root, graph, nodeMap);

    // BFS setup
    queue < int > q;
    unordered_set < int > visited;

    q.push(k);
    visited.insert(k);

    // BFS traversal
    while (!q.empty()) {
        int nodeVal = q.front();
        q.pop();

        TreeNode * node = nodeMap[nodeVal];

        // If it's a leaf node, return its value
        if (!node -> left && !node -> right) return nodeVal;

        // Visit neighbors
        for (int neighbor : graph[nodeVal]) {
            if (visited.find(neighbor) == visited.end()) {
                q.push(neighbor);
                visited.insert(neighbor);
            }
        }
    }

    return -1; // Should never reach here if a valid tree is given
}

// Example usage
int main() {
    TreeNode * root = new TreeNode(1);
    root -> left = new TreeNode(3);
    root -> right = new TreeNode(2);

    int k = 1;
    cout << "Nearest leaf to " << k << " is: " << findNearestLeaf(root, k) << endl;

    return 0;
}


// Graph Construction: 
// 𝑂
// (
// 𝑁
// )
// O(N) (each node and edge is visited once).
// BFS Traversal: 
// 𝑂
// (
// 𝑁
// )
// O(N) (worst case visits all nodes).
// Overall Complexity: 
// 𝑂
// (
// 𝑁
// )
// O(N)