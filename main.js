graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;
graph.a = {};
graph.a.fin = 1;
graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;
graph.fin = {};

costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

parents = {};
parents.a = 'start';
parents.b = 'start';
parents.fin = '';

processed = [];


node = findLowestCostNode(costs, processed);
console.log('node start', node);

while (node !== '') {
	var cost = costs[node];
	var neighbors = graph[node];

	for (var n in neighbors) {
		newCost = cost + neighbors[n];
		if (costs[n] > newCost) {
			costs[n] = newCost;
			parents[n] = node;
		}
	}
	processed.push(node);
	node = findLowestCostNode(costs, processed);
	console.log('cost, neighbor, node', cost, neighbors, node);
}



function findLowestCostNode(costs, processed) {
	var lowestCost = Infinity;
	var lowestCostNode = "";
	for (var node in costs) {
		var cost = costs[node];
		if (cost < lowestCost && processed.indexOf(node) === (-1)) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}
	return lowestCostNode;
}