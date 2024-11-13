// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.
var nearestExit = function (maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = [
        [0, 1],  // right
        [1, 0],  // down
        [0, -1], // left
        [-1, 0], // up
    ];

    // BFS queue: [row, col, steps]
    const queue = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = '+'; // Mark the entrance as visited

    while (queue.length > 0) {
        const [r, c, steps] = queue.shift();

        // Check all 4 directions
        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            // Check if the new position is within bounds and is an open space
            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                maze[newRow][newCol] === '.'
            ) {
                // If it's at the boundary and not the entrance, it's an exit
                if (
                    newRow === 0 ||
                    newRow === rows - 1 ||
                    newCol === 0 ||
                    newCol === cols - 1
                ) {
                    return steps + 1;
                }

                // Mark the cell as visited and add it to the queue
                maze[newRow][newCol] = '+';
                queue.push([newRow, newCol, steps + 1]);
            }
        }
    }

    // If no exit is found
    return -1;
};
