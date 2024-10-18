class Graph {
    constructor(size) {
        // Create a 2D array (size x size) initialized with 0 (no edges)
        this.adjacencyMatrix = Array.from({ length: size }, () => Array(size).fill(0));
        this.size = size
    }

    //Add an edga 
    addEdge(v1, v2) {
        this.adjacencyMatrix[v1][v2] = 1; // for directed  graph
        this.adjacencyMatrix[v2][v1] = 1; // for undirected graph
    }

    // Remove an edge
    removeEdge(vertex1, vertex2) {
        this.adjacencyMatrix[vertex1][vertex2] = 0;
        this.adjacencyMatrix[vertex2][vertex1] = 0;
    }

    // Check if there's an edge between two vertices
    hasEdge(vertex1, vertex2) {
        return this.adjacencyMatrix[vertex1][vertex2] === 1;
    }

    dfsAdjMatrix(start) {
        const visited =  new Array(this.adjacencyMatrix).fill(false);
        const result = [];

        const dfs = (node) => {
             visited[node] = true
             result.push(node);
             let neighbor = 0;
             while (neighbor < this.adjacencyMatrix.list) {
                if (matrix[node][neighbor] === 1 && !visited[neighbor]) {
                    dfs(neighbor);       // Recursively visit unvisited neighbors
                    i++;
                }
             }
        }

        dfs(start);
        return result;
    }
}


const graph = new Graph(2);
console.log(graph, "graph")