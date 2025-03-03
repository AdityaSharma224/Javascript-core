// Approach: Two-Pass Solution (O(n))
// First pass: Identify a potential celebrity.

// If knows(candidate, i) == true, candidate cannot be a celebrity → Eliminate candidate, set candidate = i.
// After the loop, we get a potential celebrity.
// Second pass: Verify if the potential celebrity is valid.

// Check that the candidate is known by everyone.
// Check that the candidate knows no one.
// If either condition fails, return -1.


#include <iostream>
#include <vector>

using namespace std;

// Mock "knows" function (Replace with actual implementation in LeetCode)
bool knows(int a, int b, vector<vector<int>>& graph) {
    return graph[a][b] == 1;
}

int findCelebrity(int n, vector<vector<int>>& graph) {
    int candidate = 0;

    // Step 1: Find the candidate (Elimination Process)
    for (int i = 1; i < n; i++) {
        if (knows(candidate, i, graph)) {
            candidate = i;  // If candidate knows 'i', they cannot be a celebrity
        }
    }

    // Step 2: Validate if the candidate is actually a celebrity
    for (int i = 0; i < n; i++) {
        if (i != candidate) {
            if (knows(candidate, i, graph) || !knows(i, candidate, graph)) {
                return -1; // If candidate knows someone or someone doesn't know candidate, return -1
            }
        }
    }

    return candidate;
}

int main() {
    vector<vector<int>> graph = {
        {1, 1, 0},
        {0, 1, 0},
        {1, 1, 1}
    };

    int n = graph.size();
    int celebrity = findCelebrity(n, graph);

    if (celebrity == -1) {
        cout << "No celebrity found." << endl;
    } else {
        cout << "Celebrity ID: " << celebrity << endl;
    }

    return 0;
}

// Time & Space Complexity Analysis
// Time Complexity: O(n)
// The first loop runs O(n) times.
// The second verification loop runs O(n) times.
// Total: O(n)
// Space Complexity: O(1) (only a few integer variables are used).
