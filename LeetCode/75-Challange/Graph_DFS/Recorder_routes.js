// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

// It's guaranteed that each city can reach city 0 after reorder.

var minReorder = function (n, connections) {
    let graph = {};
    // let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    for (let [a, b] of connections) {
        graph[a].push([b, 1]);
        graph[b].push([a, -1]);
    }

    let reorderCount = 0;
    const visited = new Set();

    const dfs = (start) => {
        visited.add(start);

        for(let [neighbor,dir] of graph[start]){
            if(!visited[neighbor]){
                if(dir === 1)  reorderCount++;
                dfs(neighbor)
            }
        }

    }
    dfs(0);
    return reorderCount;
}


let n = 6;
let connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]

let n1 = 3;
let connections1 = [[1, 0], [2, 0]]