const { Node, Graph } = require('./index');

test('Graph is defined', () => {
    expect(Graph).toBeDefined();
});

test('Graph is working', () => {
    const graph = new Graph();

    const nodeA = new Node('A', ['B']);
    const nodeB = new Node('B', ['C', 'D']);
    const nodeC = new Node('C');
    const nodeD = new Node('D');
    

    graph.addNode(nodeA);
    graph.addNode(nodeB);
    graph.addNode(nodeC);
    graph.addNode(nodeD);

    expect(graph.nodes[0]).toEqual(nodeA);
    expect(graph.nodes[1]).toEqual(nodeB);
    expect(graph.nodes[1].nodeLinks).toEqual(['C', 'D']);
    expect(graph.nodes[2]).toEqual(nodeC);
    expect(graph.nodes[3]).toEqual(nodeD);
});

test('addNode is working', () => {
    const graph = new Graph();

    const nodeA = new Node('A', ['B']);
    const nodeB = new Node('B', ['C', 'D']);
    const nodeC = new Node('C');
    const nodeD = new Node('D');
    

    graph.addNode(nodeA);
    graph.addNode(nodeB);
    graph.addNode(nodeC);
    graph.addNode(nodeD);

    expect(graph.nodes[0]).toEqual(nodeA);
    expect(graph.nodes[1]).toEqual(nodeB);
    expect(graph.nodes[2]).toEqual(nodeC);
    expect(graph.nodes[3]).toEqual(nodeD);

    expect(graph.nodes[1].nodeLinks).toEqual(['C', 'D']);
});

test('addEdge is working', () => {
    const graph = new Graph();

    const nodeA = new Node('A');

    graph.addNode(nodeA);
    
    const nodeB = graph.addEdge('A', 'B');
    const nodeC = graph.addEdge('B', 'C');
    const nodeD = graph.addEdge('B', 'D');

    expect(graph.nodes[0]).toEqual(nodeA);
    expect(graph.nodes[1]).toEqual(nodeB);
    expect(graph.nodes[2]).toEqual(nodeC);
    expect(graph.nodes[3]).toEqual(nodeD);

    expect(graph.nodes[1].nodeLinks).toEqual(['C', 'D']);
});

test('toString is working with 1 level deep', () => {
    const graph = new Graph();

    graph.addNode(new Node('A'));
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');

    expect(graph.toString()).toEqual("A:['B', 'C']");
});

test('toString is working with 2 levels deep', () => {
    const graph = new Graph();

    graph.addNode(new Node('A'));
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'E');

    expect(graph.toString()).toEqual("A:['B', 'C', 'D', 'E'], B:['C', 'D', 'E'], C:['D', 'E']");
});

test('toString is working with 3 levels deep', () => {
    const graph = new Graph();

    graph.addNode(new Node('A'));
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('C', 'Z');
    graph.addEdge('Z', 'W');
    graph.addEdge('Z', 'X');
    graph.addEdge('Z', 'Y');
    graph.addEdge('F', 'G');
    graph.addEdge('F', 'H');

    expect(graph.toString()).toEqual("A:['B', 'D', 'C', 'E', 'Z', 'W', 'X', 'Y'], B:['D'], C:['E', 'Z', 'W', 'X', 'Y'], Z:['W', 'X', 'Y'], F:['G', 'H']");
});

