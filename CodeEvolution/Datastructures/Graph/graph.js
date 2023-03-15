// Implenting graph using Adjacent list 

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        //if directed graph just need the bottom code
        this.adjacencyList[vertex1].add(vertex2)
        //if Undirected we need both
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)

    }

    removeVertix(vertex) {
        if (!this.adjacencyList[vertex]) {
            return null
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]])
        }
    }


    dfs(graph, startNode) {
        let visited = new Set()
        
        function traverse(node) {
            console.log(node);
            visited.add(node)
            const adjacentNodes = graph[node]
            for (let i = 0; i < adjacentNodes.length; i++) {
                adjacentNode = adjacentNodes[i]
                if(!visited.has(adjacentNode)){
                    traverse(adjacentNode)
                }
            }
        }
        traverse(startNode)
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.display()
console.log(graph.hasEdge("A", "B"))
graph.removeVertix("A")

graph.display()
console.log("DFS");


