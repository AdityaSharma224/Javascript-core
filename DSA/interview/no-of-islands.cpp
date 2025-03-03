// The given C++ code is used to count the number of islands in a 2D grid where:

// '1' represents land.
// '0' represents water.
// The approach follows Depth-First Search (DFS) to traverse the grid and mark connected land ('1') as visited ('0') to avoid counting the same island multiple times.

// Function Breakdown
// turn_to_dust Function (DFS Traversal)

// This function is a recursive DFS that "erases" an island by marking all connected '1' cells as '0'.
// It explores four directions: down, right, up, and left.
// Base cases:
// If the index is out of bounds (i < 0, j < 0, i == m, j == n).
// If the cell is already water (grid[i][j] == '0'), return immediately.
// Otherwise, mark the current cell as '0' and recursively visit adjacent land cells.
// numIslands Function (Main Logic)

// Loops through every cell in the grid.
// If a cell contains '1', it indicates a new island.
// Increments the res counter (number of islands found).
// Calls turn_to_dust() to traverse and mark all the land in the same island as '0' (destroying the island).
// The final count of res gives the total number of islands.

// Time & Space Complexity Analysis
// Time Complexity: O(m * n)
// Each cell is visited once and marked as '0', so DFS runs in O(m * n) worst case.
// Space Complexity: O(m * n) (worst case)
// If the grid is entirely filled with land, DFS can go m*n deep in recursion (stack space).

void turn_to_dust(vector<vector<char>>& grid, int i, int j, int m, int n){
    if (i<0 || j<0 || i==m || j==n || grid[i][j]=='0') return;
    grid[i][j]='0';
    turn_to_dust(grid,i+1,j,m,n);
    turn_to_dust(grid,i,j+1,m,n);
    turn_to_dust(grid,i-1,j,m,n);
    turn_to_dust(grid,i,j-1,m,n);
    return;
}

int numIslands(vector<vector<char>>& grid) {
    int m = grid.size();
    int n = grid[0].size();
    int res=0;
    for (int i=0; i<m; i++){
        for (int j=0; j<n; j++){
            if (grid[i][j]=='1'){
                res++;
                turn_to_dust(grid,i,j,m,n);
            }
        }
    }
    return res;
}