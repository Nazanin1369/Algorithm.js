function Node(label) {
    this.label = label;
    this.adjacents = [];
}

Node.prototype.addAdjacent = function(node) {
    this.adjacents.push(node);
}

Node.prototype.addAdjacents = function(nodes) {
    for(var adj in nodes) {
        this.adjacents.push(nodes[adj]);
    }
}

function Graph() {
    this.nodes = [];
}

Graph.prototype.init = function(nodes) {
    var created = {};
    for(var node in nodes) {
       for(var i in nodes[node]){
           if(!created[i]) {
               //create new node
               var newNode = new Node(i);
               //add its adjacents
               newNode.addAdjacents(nodes[node][i]);
               this.nodes.push(newNode);
               created[i] = [];
           }
       }
    }
}

var g = new Graph();
g.init([
        {'A': ['B']},
        {'B': ['C', 'A']},
        {'C': ['A']}
    ]);

console.log(g.nodes);
