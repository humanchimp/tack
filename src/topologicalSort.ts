import { assert } from "./assert";

interface Node {}

interface Edge {
  source: Node;
  target: Node;
}

export class TopologicalSort {
  nodes: Set<Node> = new Set<Node>();
  private edges: Set<Edge> = new Set<Edge>();

  addEdge(source: Node, target: Node) {
    assert(this.nodes.has(source), "Source node not found in graph");
    assert(this.nodes.has(target), "Target node not found in graph");

    this.edges.add({
      source,
      target,
    });
  }

  sort(): Node[] {
    const list = [];
    const permanent: Set<Node> = new Set<Node>();
    const temporary: Set<Node> = new Set<Node>();

    while (permanent.size < this.nodes.size) {
      for (const node of this.nodes) {
        if (!permanent.has(node)) {
          this.visit(node, list, permanent, temporary);
        }
      }
    }
    return list;
  }

  visit(node: Node, list: Node[], permanent: Set<Node>, temporary: Set<Node>): void {
    if (permanent.has(node)) {
      return;
    }
    if (temporary.has(node)) {
      throw new Error("DAG expected; cycle detected");
    }
    temporary.add(node);
    for (const edge of this.edges) {
      if (edge.source === node) {
        this.visit(edge.target, list, permanent, temporary);
      }
    }
    temporary.delete(node);
    permanent.add(node);
    list.unshift(node);
  }
}

// L ← Empty list that will contain the sorted nodes
// while exists nodes without a permanent mark do
//     select an unmarked node n
//     visit(n)

// function visit(node n)
//     if n has a permanent mark then return
//     if n has a temporary mark then stop   (not a DAG)
//     mark n with a temporary mark
//     for each node m with an edge from n to m do
//         visit(m)
//     remove temporary mark from n
//     mark n with a permanent mark
//     add n to head of L
