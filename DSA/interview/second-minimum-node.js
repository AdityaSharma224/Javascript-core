
//https://chatgpt.com/share/67bf649c-fd0c-8008-9e45-2cf04ba5120f
// n-Order Traversal (DFS)

// The function dfs(root, v):
// Recursively visits the left subtree.
// Stores the current node's value in the vector v.
// Recursively visits the right subtree.
// Since an in-order traversal of a Binary Search Tree (BST) results in a sorted array, we can leverage this property.
// Sorting and Finding Second Minimum

// The vector v will store all node values in sorted order.
// If there's only one unique value (i.e., all nodes have the same value), return -1.
// Otherwise:
// Iterate over the sorted array and find the first unique value that is different from the smallest (v[0]).
// Return that value as the second minimum.
// If no such second minimum exists, return -1.

// void dfs(TreeNode* root, int firstMin, long &secondMin) {
//     if (!root) return;
//     if (root->val > firstMin && root->val < secondMin) {
//         secondMin = root->val;
//     }
//     dfs(root->left, firstMin, secondMin);
//     dfs(root->right, firstMin, secondMin);
// }

// int findSecondMinimumValue(TreeNode* root) {
//     if (!root) return -1;
//     long secondMin = LONG_MAX;
//     int firstMin = root->val;
//     dfs(root, firstMin, secondMin);
//     return (secondMin == LONG_MAX) ? -1 : secondMin;
// }