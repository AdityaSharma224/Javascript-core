// The optimal approach to solving the Minimum Window Substring problem uses the Sliding Window technique with two pointers (left and right) and a hash map for character frequency tracking. This results in an O(m + n) time complexity, making it highly efficient.
// Time Complexity Analysis
// The right pointer scans the entire string O(m).
// The left pointer moves at most O(m).
// Each character is processed at most twice → O(m + n).
// Space Complexity Analysis
// Two hash maps (t_freq and window_freq) store character frequencies → O(n + m) in the worst case.

// Key Optimizations
// Sliding Window: Expands and contracts efficiently.
// Two Pointers: left contracts when the valid window is found.
// Hash Map Lookup (O(1)): Quickly checks if characters are in t.
// Example Walkthrough
// Input: "ADOBECODEBANC", "ABC"
// Expand right → "ADOBEC" (valid)
// Shrink left → "BANC" (optimal answer)


#include <iostream>
#include <unordered_map>
#include <climits>

using namespace std;

string minWindow(string s, string t) {
    if (s.empty() || t.empty()) return "";

    unordered_map<char, int> t_freq, window_freq;
    for (char c : t) t_freq[c]++;  // Count occurrences of characters in t

    int left = 0, right = 0, required = t_freq.size();
    int formed = 0, min_len = INT_MAX, start_idx = 0;

    while (right < s.size()) {
        char c = s[right];
        window_freq[c]++;

        if (t_freq.count(c) && window_freq[c] == t_freq[c]) {
            formed++;  // A character meets the requirement
        }

        while (formed == required) { // Valid substring found
            if (right - left + 1 < min_len) {
                min_len = right - left + 1;
                start_idx = left;
            }

            char left_char = s[left];
            window_freq[left_char]--;

            if (t_freq.count(left_char) && window_freq[left_char] < t_freq[left_char]) {
                formed--;  // Removing a necessary character
            }
            left++;  // Contract window from left
        }
        right++;  // Expand window from right
    }

    return min_len == INT_MAX ? "" : s.substr(start_idx, min_len);
}

int main() {
    string s1 = "ADOBECODEBANC", t1 = "ABC";
    cout << "Output: " << minWindow(s1, t1) << endl; // Expected: "BANC"

    string s2 = "a", t2 = "a";
    cout << "Output: " << minWindow(s2, t2) << endl; // Expected: "a"

    string s3 = "a", t3 = "aa";
    cout << "Output: " << minWindow(s3, t3) << endl; // Expected: ""

    return 0;
}
