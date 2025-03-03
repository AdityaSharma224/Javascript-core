// Approach:
// Primary Stack (st): Stores elements in LIFO order.
// Multiset (maxSet): Maintains all elements for fast max lookup.
// Auxiliary Stack (aux): Helps in popMax() to remove the correct max occurrence.

#include <stack>
#include <set>

class MaxStack {
private:
    std::stack<int> st;
    std::multiset<int> maxSet;

public:
    void push(int x) {
        st.push(x);
        maxSet.insert(x);
    }

    int pop() {
        int topElement = st.top();
        st.pop();
        maxSet.erase(maxSet.find(topElement));
        return topElement;
    }

    int top() {
        return st.top();
    }

    int peekMax() {
        return *maxSet.rbegin();
    }

    int popMax() {
        int maxVal = *maxSet.rbegin();
        maxSet.erase(maxSet.find(maxVal));

        std::stack<int> buffer;
        while (st.top() != maxVal) {
            buffer.push(st.top());
            st.pop();
        }

        st.pop(); // Remove the max element from stack

        while (!buffer.empty()) {
            push(buffer.top()); // Re-push elements back
            buffer.pop();
        }

        return maxVal;
    }
};
