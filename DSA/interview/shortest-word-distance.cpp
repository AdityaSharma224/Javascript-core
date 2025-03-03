// Explanation:
// Initialize two variables index1 and index2 to store the positions of word1 and word2 respectively.
// Iterate through the list:
// If word1 is found, update index1.
// If word2 is found, update index2.
// Whenever both indices are updated, compute abs(index1 - index2) and update minDist.
// Return the minimum distance found.
// Time Complexity:
// O(n), where n is the number of words in the list, since we traverse the list only once.
// Space Complexity:
// O(1), since we use only a few integer variables.

// #include <iostream>
// #include <vector>
// #include <string>
// #include <climits>

// using namespace std;

// int shortestDistance(vector<string>& words, string word1, string word2) {
//     int index1 = -1, index2 = -1;
//     int minDist = INT_MAX;
    
//     for (int i = 0; i < words.size(); i++) {
//         if (words[i] == word1) {
//             index1 = i;
//         } 
//         if (words[i] == word2) {
//             index2 = i;
//         }
//         if (index1 != -1 && index2 != -1) {
//             minDist = min(minDist, abs(index1 - index2));
//         }
//     }
    
//     return minDist;
// }

// int main() {
//     vector<string> words = {"practice", "makes", "perfect", "coding", "makes"};
    
//     cout << shortestDistance(words, "coding", "practice") << endl; // Output: 3
//     cout << shortestDistance(words, "makes", "coding") << endl;    // Output: 1
    
//     return 0;
// }
