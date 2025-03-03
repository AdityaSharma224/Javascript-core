// Key Observations:
// A leaf node is a node with no children.
// The depth (or height) of a node determines when it will be removed:
// A leaf has height 0.
// After removing all height-0 nodes, the next set of leaves will be height-1, and so on.
// We use postorder traversal (left → right → root) to determine the height of each node dynamically.
// Algorithm (Recursive DFS)
// Use a helper function dfs(root, result):
// Compute leftHeight from the left subtree.
// Compute rightHeight from the right subtree.
// The current node's height is max(leftHeight, rightHeight) + 1.
// Store the node's value in result[height].
// Process leaves first, so the result is built bottom-up.

#include <iostream>
#include <vector>

using namespace std;

// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int dfs(TreeNode* root, vector<vector<int>>& result) {
    if (!root) return -1;  // Base case: Empty node has height -1

    int leftHeight = dfs(root->left, result);
    int rightHeight = dfs(root->right, result);
    int currHeight = max(leftHeight, rightHeight) + 1;

    if (result.size() == currHeight) {
        result.push_back({});  // Create a new level in the result vector
    }
    
    result[currHeight].push_back(root->val);  // Store current node in its height level
    
    return currHeight;  // Return current node's height
}

vector<vector<int>> findLeaves(TreeNode* root) {
    vector<vector<int>> result;
    dfs(root, result);
    return result;
}

// Helper function to build the tree (for testing)
TreeNode* createTree() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    return root;
}

int main() {
    TreeNode* root = createTree();
    vector<vector<int>> result = findLeaves(root);

    cout << "Output: ";
    for (const auto& level : result) {
        cout << "[";
        for (int val : level) cout << val << " ";
        cout << "] ";
    }
    cout << endl;

    return 0;
}


// Time Complexity: O(n)
// Each node is visited once.
// Space Complexity: O(n)
// In the worst case (skewed tree), recursion stack goes up to O(n), and we store O(n) nodes in result.