const graph = {
    A: ['B', 'C'],
    B: ['A', 'C'],
    C: ['A', 'D'],
    D: ['D']
}

BFS(graph, 'A')

function BFS(graph, startNode) {
    const visited = new Set();
    const queue = [];
    visited.add(startNode)
    queue.push(startNode)

    while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode);
        
        const adjascentNodes = graph[currentNode];
        for (let i = 0; i < adjascentNodes.length; i++) {
            const aNode = adjascentNodes[i]
            if (!visited.has(aNode)){
                visited.add(aNode)
                queue.push(aNode)
            }
        }
    }
}