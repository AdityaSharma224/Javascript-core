Explanation of the Code
The function numIslands counts the number of islands in a m x n grid where:

'1' represents land.
'0' represents water.
An island is surrounded by water and is formed by connecting adjacent land cells horizontally or vertically.
It uses Depth-First Search (DFS) to explore each island and mark its land as '0' (visited).

Approach
Loop through the grid:
If a '1' is found, increment the island count.
Call turn_to_dust(i, j), which marks all connected land cells as visited ('0').
DFS Traversal (turn_to_dust):
Base case: If the cell is out of bounds or already '0', return.
Mark grid[i][j] as '0' (visited).
Recursively visit all four adjacent cells (up, down, left, right).

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

grid = {
    {'1', '1', '0', '0', '0'},
    {'1', '1', '0', '0', '0'},
    {'0', '0', '1', '0', '0'},
    {'0', '0', '0', '1', '1'}
  }
  Step-by-Step Execution
  First DFS Call at (0,0) → Marks the entire first island ('1's at grid[0][0], grid[0][1], grid[1][0], grid[1][1]) as '0'.
  Second DFS Call at (2,2) → Marks second island.
  Third DFS Call at (3,3) → Marks third island.
  ✔ Final Count: 3
  
  Time Complexity Analysis
  Each cell is visited once → O(M × N)
  DFS depth (worst case) → O(M × N)
  Total Complexity: O(M × N) (Efficient)