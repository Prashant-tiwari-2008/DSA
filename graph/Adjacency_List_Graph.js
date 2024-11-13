class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    // add node/vertex
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    //add edge
    addEdge(v1, v2) {
        this.adjacencyList[v1] ? this.adjacencyList[v1].push(v2) : this.adjacencyList[v1] = [v2];
        this.adjacencyList[v2] ? this.adjacencyList[v2].push(v1) : this.adjacencyList[v2] = [v1];
    }

    // remove Edge 
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2)
        this.adjacencyList[v2] = this.adjacencyList[v1].filter(v => v != v1)
    }

    // remove node
    removeVertex(v) {
        while (this.adjacencyList[v].length) {
            const adjacencyVertex = this.adjacencyList.pop();
            this.removeEdge(v, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
    
    // Depth-First Search (DFS) Recursive
    dfsRecursive(start) {
        const result = [];
        const visited = {};

        const dfs = (vertex) => {
            if (!vertex) return null
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }
        dfs(start)
        return result;
    }

    // Iterative DFS using stack
    dfsIterative(start) {
        const stack = [start];
        const visited = {};
        const result = [];

        visited[start] = true

        while (stack.length > 0) {
            let currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        return result;
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        let currentVertex
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });    
        }
    }
}

const graph = new Graph();
graph.addVertex('A');

// adding edge
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'D')
graph.addEdge('B', 'E')
graph.addEdge('C', 'D')
graph.addEdge('D', 'E')
console.log(graph, "before remving edge")
// Remove Edge
graph.removeEdge('B', 'E')
graph.removeEdge('D', 'E')
console.log(graph, "After remving edge")
console.log(graph.dfsRecursive("D"), "DFS")

// console.log(graph)
