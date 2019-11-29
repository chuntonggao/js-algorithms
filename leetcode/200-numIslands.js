/**
 * @param {character[][]} grid
 * @return {number}
 */


var numIslandsDFS = function(grid) {
    const dfs = (grid, r, c) => {
        const numR = grid.length;
        const numC = grid[0].length;
        if (r < 0 || c < 0 
            || r >= numR || c >= numC 
            || grid[r][c] === '0')
            return;
        grid[r][c] = '0';
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
    }
    
    if (!grid || grid.length === 0) return 0;
    const numR = grid.length;
    const numC = grid[0].length;
    let numIslands = 0;
    for (let r = 0; r < numR; r++) {
        for (let c = 0; c < numC; c++) {
            if (grid[r][c] === '1')
                numIslands++;
            dfs(grid, r, c);
        }
    }
    return numIslands;
};

var numIslandsBFS = function(grid) {
    if (!grid || grid.length === 0) return 0;
    const numR = grid.length;
    const numC = grid[0].length;
    let numIslands = 0;
    
    for (let r = 0; r < numR; r++) {
        for (let c = 0; c < numC; c++) {
            if (grid[r][c] === '1') {
                numIslands++;
                const neighbors = [];
                neighbors.push([ r, c ]);
                while (neighbors.length > 0) {
                    const neighbor = neighbors.shift();
                    const row = neighbor[0];
                    const col = neighbor[1];
                    if (row - 1 >= 0 && grid[row - 1][col] === '1') {
                        neighbors.push([ row - 1, col]);
                        grid[row - 1][col] = '0';
                    }
                    if (row + 1 < numR && grid[row + 1][col] === '1') {
                        neighbors.push([ row + 1, col]);
                        grid[row + 1][col] = '0';
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] === '1') {
                        neighbors.push([ row, col - 1]);
                        grid[row][col - 1] = '0';
                    }
                    if (col + 1 < numC && grid[row][col + 1] === '1') {
                        neighbors.push([ row, col + 1]);
                        grid[row][col + 1] = '0';
                    }
                }
            }
        }
    }
    return numIslands;
}

const UnionFind = function(grid) {
    this.count = 0;
    const numR = grid.length;
    const numC = grid[0].length;
    this.parent = [];
    this.rank = [];
    for (let i = 0; i < numR; i++) {
        for (let j = 0; j < numC; j++) {
            if (grid[i][j] === '1') {
                this.parent[i * numC + j] = i * numC + j;
                this.count++;
            }
            this.rank[i * numR + j] = 0;       
        }
    }
};

UnionFind.prototype.find = function(i) {
    // path compression
    if (this.parent[i] !== i) 
        this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
}

UnionFind.prototype.union = function(x, y) {
    // union with rank
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
        if (this.rank[rootX] > this.rank[rootY])
            this.parent[rootY] = rootX;
        else if (this.rank[rootX] < this.rank[rootY])
            this.parent[rootX] = rootY;
        else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
    this.count--;
    }
}

UnionFind.prototype.getCount = function() {
    return this.count;
}

var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;
    const numR = grid.length;
    const numC = grid[0].length;
    let numIslands = 0;
    const uf = new UnionFind(grid);
    for (let r = 0; r < numR; r++) {
        for (let c = 0; c < numC; c++) {
            if (grid[r][c] === '1') {
                grid[r][c] = '0';
                if (r - 1 >= 0 && grid[r - 1][c] === '1')
                    uf.union(r * numC + c, (r - 1) * numC + c);
                if (r + 1 < numR && grid[r + 1][c] === '1')
                    uf.union(r * numC + c, (r + 1) * numC + c); 
                if (c - 1 >= 0 && grid[r][c - 1] === '1')
                    uf.union(r * numC + c, r * numC + c - 1);
                if (c + 1 < numC && grid[r][c + 1] === '1')
                    uf.union(r * numC + c, r * numC + c + 1);                
            }
        }
    }
    return uf.getCount();
}