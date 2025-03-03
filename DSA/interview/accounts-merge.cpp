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

class DSU {
public:
    unordered_map<string, string> parent;

    // Find function with path compression
    string find(string x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }

    // Union function
    void unite(string x, string y) {
        string rootX = find(x);
        string rootY = find(y);
        if (rootX != rootY)
            parent[rootX] = rootY;
    }
};

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    DSU dsu;
    unordered_map<string, string> emailToName;
    
    // Step 1: Initialize DSU and map emails to names
    for (auto& account : accounts) {
        string name = account[0];
        string firstEmail = account[1];

        for (int i = 1; i < account.size(); i++) {
            string email = account[i];
            dsu.parent[email] = email; // Initialize DSU parent
            emailToName[email] = name;
            dsu.unite(firstEmail, email); // Union all emails within the same account
        }
    }

    // Step 2: Group emails by root parent
    unordered_map<string, vector<string>> mergedAccounts;
    for (auto& [email, _] : emailToName) {
        mergedAccounts[dsu.find(email)].push_back(email);
    }

    // Step 3: Construct the result
    vector<vector<string>> result;
    for (auto& [root, emails] : mergedAccounts) {
        sort(emails.begin(), emails.end());
        emails.insert(emails.begin(), emailToName[root]); // Add name
        result.push_back(emails);
    }

    return result;
}

int main() {
    vector<vector<string>> accounts1 = {
        {"John","johnsmith@mail.com","john_newyork@mail.com"},
        {"John","johnsmith@mail.com","john00@mail.com"},
        {"Mary","mary@mail.com"},
        {"John","johnnybravo@mail.com"}
    };

    vector<vector<string>> result1 = accountsMerge(accounts1);
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


