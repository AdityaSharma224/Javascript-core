//Using recursion, we compute the max depth of the left and right subtrees and take the maximum.

#include <iostream>
#include <algorithm>

using namespace std;

// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int maxDepth(TreeNode* root) {
    if (!root) return 0; // Base case: Empty tree has depth 0
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}

// Helper function to create a sample tree
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
    cout << "Max Depth: " << maxDepth(root) << endl; // Expected Output: 3
    return 0;
}