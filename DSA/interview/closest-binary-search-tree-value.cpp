// Key Observations
// BST Property:
// Left subtree values < root.val
// Right subtree values > root.val
// Binary Search Logic:
// If target is smaller than root.val, move left.
// If target is greater than root.val, move right.
// Keep track of the closest value seen so far.
// If two values are equally close, return the smaller one.

#include <iostream>
#include <cmath>

using namespace std;

// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int closestValue(TreeNode* root, double target) {
    int closest = root->val;

    while (root) {
        // If current node is closer to the target, update closest
        if (abs(root->val - target) < abs(closest - target) || 
           (abs(root->val - target) == abs(closest - target) && root->val < closest)) {
            closest = root->val;
        }

        // Move left or right based on BST property
        root = (target < root->val) ? root->left : root->right;
    }

    return closest;
}

// Helper function to create a BST for testing
TreeNode* createTree() {
    TreeNode* root = new TreeNode(4);
    root->left = new TreeNode(2);
    root->right = new TreeNode(5);
    root->left->left = new TreeNode(1);
    root->left->right = new TreeNode(3);
    return root;
}

int main() {
    TreeNode* root = createTree();
    double target1 = 3.714286;
    cout << "Closest Value: " << closestValue(root, target1) << endl; // Expected: 4

    TreeNode* root2 = new TreeNode(1);
    double target2 = 4.428571;
    cout << "Closest Value: " << closestValue(root2, target2) << endl; // Expected: 1

    return 0;
}

4
/ \
2   5
/ \
1   3
Target: 3.714286

Step-by-Step Execution:
Start at root (4)

abs(4 - 3.714286) = 0.285714
closest = 4
Move left (target < 4)
Move to 2

abs(2 - 3.714286) = 1.714286
closest = 4 (unchanged, since 4 is closer)
Move right (target > 2)
Move to 3

abs(3 - 3.714286) = 0.714286
closest = 4 (unchanged)
Move right (target > 3)
Null node reached → Stop.

Final closest value: 4

// Time & Space Complexity
// Time Complexity: O(h)
// In a balanced BST, height h = log n, so O(log n).
// In a skewed BST, height h = n, so worst case O(n).
// Space Complexity: O(1), since we use only one variable.
