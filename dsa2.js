// Hey man! This is the structure behind Social Networks.
// We are building an Undirected Graph using an Adjacency List.

console.log("===============================");
console.log("--- 1. BUILDING THE GRAPH ---");
console.log("===============================");

class Graph {
  constructor() {
    // We use a simple Object to store edges.
    // Format: { "Alex": ["Sam", "Jordan"], "Sam": ["Alex"] }
    this.adjacencyList = {};
  }

  // Add a Node (Vertex)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Connect two Nodes (Edge)
  addEdge(v1, v2) {
    // Undirected: If Alex knows Sam, Sam knows Alex.
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // Remove Connection
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  // Delete a User (Remove vertex and all its connections)
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

// LET'S BUILD A SOCIAL NETWORK
const facebook = new Graph();

facebook.addVertex("Alex");
facebook.addVertex("Sam");
facebook.addVertex("Jordan");
facebook.addVertex("Taylor");
facebook.addVertex("Casey");

// Connections
facebook.addEdge("Alex", "Sam");
facebook.addEdge("Alex", "Jordan");
facebook.addEdge("Sam", "Taylor");
facebook.addEdge("Jordan", "Casey");
facebook.addEdge("Taylor", "Casey");

/* VISUALIZATION:
    Alex --- Sam
      |       |
    Jordan   Taylor
      \     /
       Casey
*/

console.log("Graph Structure:", facebook.adjacencyList);

console.log("\n===============================");
console.log("--- 2. DFS (Depth First Search) ---");
console.log("===============================");
// Interview Question: "Traverse the graph. Follow one path until it hits a dead end."
// TRICK: Unlike Trees, Graphs have CYCLES. You MUST track 'visited' nodes or you loop forever.

function DFS(graph, start) {
  const result = [];
  const visited = {}; // The "Have I been here?" check
  const list = graph.adjacencyList;

  function traverse(vertex) {
    if (!vertex) return;

    // 1. Mark as visited immediately
    visited[vertex] = true;
    result.push(vertex);

    // 2. Visit all neighbors
    list[vertex].forEach((neighbor) => {
      // ONLY visit if we haven't been there yet
      if (!visited[neighbor]) {
        traverse(neighbor);
      }
    });
  }

  traverse(start);
  return result;
}

console.log("DFS Path (Alex):", DFS(facebook, "Alex"));
// Output should go deep: Alex -> Sam -> Taylor -> Casey -> Jordan

console.log("\n===============================");
console.log("--- 3. BFS (Breadth First Search) ---");
console.log("===============================");
// Interview Question: "Find 'Friends of Friends' (Degrees of separation)."
// BFS visits neighbors first, then neighbors' neighbors.

function BFS(graph, start) {
  const queue = [start]; // To-Do List
  const result = [];
  const visited = {};

  visited[start] = true; // Mark start as visited

  while (queue.length) {
    // 1. Take from front
    let currentVertex = queue.shift();
    result.push(currentVertex);

    // 2. Loop through neighbors
    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true; // Mark visited BEFORE pushing to queue
        queue.push(neighbor);
      }
    });
  }

  return result;
}

console.log("BFS Path (Alex):", BFS(facebook, "Alex"));
// Output should go wide: Alex -> Sam -> Jordan -> Taylor -> Casey
