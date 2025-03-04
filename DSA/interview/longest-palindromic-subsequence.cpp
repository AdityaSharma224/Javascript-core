// Approach: Dynamic Programming (O(n²))
// Key Idea:
// Define DP State:

// dp[i][j] represents the length of the longest palindromic subsequence in the substring s[i:j].
// Base Case:

// Single-character substrings are palindromes of length 1, so dp[i][i] = 1.

#include <iostream>
#include <vector>

using namespace std;

int longestPalindromeSubseq(string s) {
    int n = s.length();
    vector<vector<int>> dp(n, vector<int>(n, 0));

    // Base case: Single-character palindromes
    for (int i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Fill the DP table (bottom-up)
    for (int len = 2; len <= n; len++) { // Length of substring
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1; // End index
            if (s[i] == s[j]) {
                dp[i][j] = 2 + dp[i + 1][j - 1];
            } else {
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][n - 1]; // Answer for the whole string
}

int main() {
    string s1 = "bbbab";
    string s2 = "cbbd";

    cout << "Longest Palindromic Subsequence (Example 1): " << longestPalindromeSubseq(s1) << endl; // Output: 4
    cout << "Longest Palindromic Subsequence (Example 2): " << longestPalindromeSubseq(s2) << endl; // Output: 2

    return 0;
}

// Time & Space Complexity
// Time Complexity: O(n²) → Since we fill an n × n DP table.
// Space Complexity: O(n²) → The DP table requires O(n²) storage.



// Instead of storing an N × N table, we can use two 1D arrays (prev and curr) for O(N) space.

int longestPalindromeSubseq(string s) {
    int n = s.length();
    vector<int> prev(n, 0), curr(n, 0);

    for (int i = n - 1; i >= 0; i--) {
        curr[i] = 1;  // Base case: single-character palindrome
        for (int j = i + 1; j < n; j++) {
            if (s[i] == s[j]) {
                curr[j] = 2 + prev[j - 1];
            } else {
                curr[j] = max(prev[j], curr[j - 1]);
            }
        }
        prev = curr;
    }

    return prev[n - 1]; // Answer
}

✅ Time Complexity: O(N²)
✅ Space Complexity: O(N) (instead of O(N²))

