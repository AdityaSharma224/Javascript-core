// We can use Kahn’s Algorithm (BFS) to check if we can complete all courses.

// Key Idea
// Build a Directed Graph (Adjacency List) from the prerequisites.
// Compute in-degrees (number of prerequisites) for each course.
// Add courses with 0 in-degree to a queue (these can be taken immediately).
// Process courses from the queue:
// Reduce the in-degree of dependent courses.
// If a course's in-degree becomes 0, add it to the queue.
// If we process all courses, return true, otherwise return false (cycle detected).

#include <iostream>
#include <vector>
#include <queue>

using namespace std;

bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> graph(numCourses);
    vector<int> inDegree(numCourses, 0);

    // Build adjacency list and compute in-degree
    for (const auto& pre : prerequisites) {
        int course = pre[0], prereq = pre[1];
        graph[prereq].push_back(course);
        inDegree[course]++;
    }

    // Start with courses having 0 in-degree (no prerequisites)
    queue<int> q;
    for (int i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) q.push(i);
    }

    int count = 0;
    while (!q.empty()) {
        int course = q.front();
        q.pop();
        count++; // Processed one course

        for (int nextCourse : graph[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] == 0) q.push(nextCourse);
        }
    }

    return count == numCourses; // If all courses are processed, return true
}

int main() {
    vector<vector<int>> prerequisites1 = {{1, 0}};
    cout << "Output: " << (canFinish(2, prerequisites1) ? "true" : "false") << endl; // Expected: true

    vector<vector<int>> prerequisites2 = {{1, 0}, {0, 1}};
    cout << "Output: " << (canFinish(2, prerequisites2) ? "true" : "false") << endl; // Expected: false

    return 0;
}

// Time & Space Complexity
// Time Complexity: O(V + E), where V is the number of courses and E is the number of prerequisites.
// Space Complexity: O(V + E), for the adjacency list and in-degree array.



// approach 2

// If there is a cycle, then it's impossible to complete all courses.

// Key Idea
// Use a DFS traversal to detect cycles in the directed graph.
// Maintain a visited array:
// 0: Not visited.
// 1: Being visited (part of current recursion stack).
// 2: Fully processed.
// If we encounter a 1 during DFS, a cycle is detected.

#include <iostream>
#include <vector>

using namespace std;

bool hasCycle(int course, vector<vector<int>>& graph, vector<int>& visited) {
    if (visited[course] == 1) return true; // Cycle detected
    if (visited[course] == 2) return false; // Already processed

    visited[course] = 1; // Mark as being visited
    for (int nextCourse : graph[course]) {
        if (hasCycle(nextCourse, graph, visited)) return true;
    }

    visited[course] = 2; // Mark as fully processed
    return false;
}

bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> graph(numCourses);
    for (const auto& pre : prerequisites) {
        graph[pre[1]].push_back(pre[0]);
    }

    vector<int> visited(numCourses, 0);
    for (int i = 0; i < numCourses; i++) {
        if (!visited[i] && hasCycle(i, graph, visited)) {
            return false; // Cycle detected
        }
    }

    return true;
}

int main() {
    vector<vector<int>> prerequisites1 = {{1, 0}};
    cout << "Output: " << (canFinish(2, prerequisites1) ? "true" : "false") << endl; // Expected: true

    vector<vector<int>> prerequisites2 = {{1, 0}, {0, 1}};
    cout << "Output: " << (canFinish(2, prerequisites2) ? "true" : "false") << endl; // Expected: false

    return 0;
}

// Time & Space Complexity (DFS)
// Time Complexity: O(V + E), similar to BFS.
// Space Complexity: O(V + E), for storing the adjacency list and visited array.
