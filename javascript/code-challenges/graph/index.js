class Graph{
    constructor(){
        this.adjacenctList={};
    }

    addVertex(vertex){
        if(!this.adjacenctList[vertex]) this.adjacenctList[vertex]=[];
    }
    addEdge(v1,v2){
        this.adjacenctList[v1].push(v2);
        this.adjacenctList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacenctList[vertex1]=this.adjacenctList[vertex1].filter(v=>v!==vertex2)
        this.adjacenctList[vertex2]=this.adjacenctList[vertex2].filter(v=>v!==vertex1)
    }
    removeVertex(vertex){
        while(this.adjacenctList[vertex].length){
            const adjacenctList=this.adjacenctList[vertex].pop();
            this.removeEdge(vertex,adjacenctList)
        }
        delete this.adjacenctList[vertex]
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacenctList;
        // console.log(this.ad);
        (function dfs(vertex){
            console.log(vertex);
            if(!vertex) return 'done';
            visited[vertex] = true;
            console.log(visited);
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
}

let graph=new Graph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');

graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("b", "a");
graph.addEdge("c", "a");
graph.addEdge("c", "b");
// console.log(graph);
console.log(graph.depthFirstRecursive('b'));
// console.log(graph);