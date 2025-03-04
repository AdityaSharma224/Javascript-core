// Approach: Union-Find (Disjoint Set Union - DSU)
// Key Observations
// Each email is a node, and we need to group them based on common accounts.
// We use Union-Find (Disjoint Set) to merge emails belonging to the same person.
// Map emails to their owners to recover names.
// Steps
// Map each email to a unique ID (Union-Find parent).
// Union emails within the same account.
// Find the root representative for each email.
// Group emails by their root parent and sort them.
// Attach the corresponding name to each merged group.

#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>

using namespace std;

// Disjoint Set Union (DSU) class for union-find operations
class DSU {
public:
    unordered_map<string, string> parent; // Maps each email to its parent email (leader)

    // Find function with path compression
    string find(string x) {
        if (parent[x] != x) // If email is not its own parent, find the root
            parent[x] = find(parent[x]); // Path compression: update parent to root
        return parent[x];
    }

    // Union function: Connect two emails
    void unite(string x, string y) {
        string rootX = find(x); // Find root of x
        string rootY = find(y); // Find root of y
        if (rootX != rootY) // If they belong to different sets, merge them
            parent[rootX] = rootY; // Attach rootX to rootY
    }
};

// Function to merge accounts
vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    DSU dsu;
    unordered_map<string, string> emailToName; // Maps email to account name

    // Step 1: Initialize DSU and map emails to names
    for (auto& account : accounts) {
        string name = account[0]; // Extract account holder's name
        string firstEmail = account[1]; // First email in the account
        
        for (int i = 1; i < account.size(); i++) {
            string email = account[i];
            dsu.parent[email] = email; // Initialize DSU parent for email
            emailToName[email] = name; // Map email to name
            dsu.unite(firstEmail, email); // Union all emails within the same account
        }
    }

    // Step 2: Group emails by root parent
    unordered_map<string, vector<string>> mergedAccounts; // Maps root email to all emails in its set
    for (auto& [email, _] : emailToName) {
        mergedAccounts[dsu.find(email)].push_back(email); // Find root and group emails
    }

    // Step 3: Construct the final merged accounts
    vector<vector<string>> result;
    for (auto& [root, emails] : mergedAccounts) {
        sort(emails.begin(), emails.end()); // Sort emails alphabetically
        emails.insert(emails.begin(), emailToName[root]); // Add account holder's name
        result.push_back(emails);
    }

    return result;
}

// Driver function
int main() {
    vector<vector<string>> accounts1 = {
        {"John","johnsmith@mail.com","john_newyork@mail.com"},
        {"John","johnsmith@mail.com","john00@mail.com"},
        {"Mary","mary@mail.com"},
        {"John","johnnybravo@mail.com"}
    };

    vector<vector<string>> result1 = accountsMerge(accounts1);

    // Print the merged accounts
    cout << "Merged Accounts:\n";
    for (const auto& account : result1) {
        cout << "[";
        for (const auto& str : account) {
            cout << str << " ";
        }
        cout << "]\n";
    }

    return 0;
}

Step 1: Initialize DSU & Map Emails
Each email is initially its own parent, and emails are mapped to their owner.

Email	Parent	Name
johnsmith@mail.com	johnsmith@mail.com	John
john_newyork@mail.com	john_newyork@mail.com	John
john00@mail.com	john00@mail.com	John
mary@mail.com	mary@mail.com	Mary
johnnybravo@mail.com	johnnybravo@mail.com	John


Step 2: Union Emails
Accounts are merged based on shared emails.

First account:

Union: johnsmith@mail.com ↔ john_newyork@mail.com
Parent: john_newyork@mail.com becomes the root.
Second account:

Union: johnsmith@mail.com ↔ john00@mail.com
Parent: john_newyork@mail.com is the root of johnsmith@mail.com, so john00@mail.com also joins.
The third and fourth accounts have unique emails.

Final Parent Mapping After Union-Find:

Email	Parent (Root)
johnsmith@mail.com	john_newyork@mail.com
john_newyork@mail.com	john_newyork@mail.com
john00@mail.com	john_newyork@mail.com
mary@mail.com	mary@mail.com
johnnybravo@mail.com	johnnybravo@mail.com


Step 3: Group Emails by Root
Using the root parent, we group emails:

Root Parent	Emails
john_newyork@mail.com	[johnsmith@mail.com, john_newyork@mail.com, john00@mail.com]
mary@mail.com	[mary@mail.com]
johnnybravo@mail.com	[johnnybravo@mail.com]


Step 4: Construct Result
Sort the emails and add names:

cpp
Copy
Edit
[
    ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"]
]