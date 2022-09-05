'use strict';
const Vertex = require('./vertex')
const Edge = require('./edge')

class Graph {
    constructor() {
        this.adjacenctList = new Map();
    }
    addVertex(vertex) {
        this
            .adjacenctList
            .set(vertex, []);
    }
    addDirectedEdge(start, end, weight) {
        if (!this.adjacenctList.has(start) || !this.adjacenctList.has(end)) {
            console.log('vertex is not exist')
            return;
        }
        const adjacentVertix = this
            .adjacenctList
            .get(start);
        adjacentVertix.push(new Edge(end, weight));
    }
}

const myGraph = new Graph();

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(one, three);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(five, three);

for (const [k, v] of myGraph.adjacenctList.entries()) {
    console.log("K ", k, 'V= ', v);
}
// console.log(myGraph);