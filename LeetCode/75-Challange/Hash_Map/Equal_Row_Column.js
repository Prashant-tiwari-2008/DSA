// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

const grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]] // 1
const grid1 = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]] // 3

var equalPairs = function (grid) {
    debugger
    let hash = {}
    let count = 0

    for (let row of grid) {
        let e = row.join(',');
        hash[e] = hash[e] + 1 || 1;
    }

    for (let col = 0; col < grid.length; col++) {
        let colString = []
        for (let row = 0; row < grid.length; row++) {
            colString.push(grid[row][col])
        }
        colString = colString.join(',');
        if (hash[colString]) {
            count += hash[colString];
        }
    }
    return count;
};

console.log(equalPairs(grid))
console.log(equalPairs(grid1))