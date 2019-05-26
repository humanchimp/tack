const { TopologicalSort } = require(".");

const ts = new TopologicalSort();

ts.nodes.add("a");
ts.nodes.add("b");
ts.nodes.add("c");
ts.nodes.add("d");
ts.nodes.add("e");

ts.addEdge("a", "b");
ts.addEdge("a", "c");
ts.addEdge("d", "a");
ts.addEdge("a", "e");
ts.addEdge("c", "e");

console.log(ts.sort());
