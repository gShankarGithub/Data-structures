function dfs(graph, startNode) {
    const visited = new Set();
    function traverse(node) {
        console.log(node);
        visited.add(node);
        const adjacentNodes = graph[node];
        for (let i = 0; i < adjacentNodes.length; i++) {
            const adjacentNode = adjacentNodes[i];
            if (!visited.has(adjacentNode)) {
                traverse(adjacentNode);
            }
        }
    }

    traverse(startNode);
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

dfs(graph, 'A');