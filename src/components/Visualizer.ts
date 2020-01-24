import * as d3 from 'd3';

export const vizEnter = (className: string, graphData: any[]) => {
  var margin = { top: 80, right: 80, bottom: 80, left: 80 },
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  const nodesData: RelayNode[] = [
    { id: 0, text: 'x: Tensor[(21), float32]', level: 0, x: 0 },
    { id: 1, text: 'y: Tensor[(958, 21), float32]', level: 0, x: 1 },
    { id: 2, text: 'Call(op=multiply)', level: 1, x: 0.5 },
    { id: 3, text: 'Call(op=sum)', level: 2, x: 0.5 },
    { id: 4, text: 'Fuction', level: 3, x: 0.5 },
  ];
  const edgesData: RelayEdge[] = [
    { parent: 0, child: 2 },
    { parent: 1, child: 2 },
    { parent: 2, child: 3 },
    { parent: 3, child: 4 },
  ];

  const nodesMap: any = {};
  nodesData.forEach(node => (nodesMap[node.id] = node));

  var x = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, width]);

  var y0 = d3
    .scaleLinear()
    .domain([0, 3])
    .range([height, 0]);

  var svg = d3
    .select(`.${className}`)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('class', 'graph')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  x.domain([
    0,
    d3.max(nodesData, function(d: RelayNode) {
      return d.x;
    })!,
  ]);
  y0.domain([
    0,
    d3.max(nodesData, function(d: RelayNode) {
      return d.level;
    })!,
  ]);

  const edges = svg
    .selectAll('.edge')
    .data(edgesData)
    .enter();

  edges
    .append('line')
    .attr('x1', function(d) {
      return x(nodesMap[d.parent].x!)!;
    })
    .attr('x2', function(d) {
      return x(nodesMap[d.child].x!)!;
    })
    .attr('y1', function(d) {
      return y0(nodesMap[d.parent].level!)!;
    })
    .attr('y2', function(d) {
      return y0(nodesMap[d.child].level!)!;
    })
    .attr('stroke-width', 2)
    .attr('stroke', 'black');

  const nodes = svg
    .selectAll('.node')
    .data(nodesData)
    .enter();

  nodes
    .append('circle')
    .attr('class', 'node')
    .attr('cx', function(d) {
      return x(d.x!)!;
    })
    .attr('cy', function(d) {
      return y0(d.level);
    })
    .attr('r', 30)
    .style('fill', 'lightgrey');

  const labels = svg
    .selectAll('.label')
    .data(nodesData)
    .enter();

  labels
    .append('text')
    .attr('class', 'label')
    .attr('x', function(d) {
      return x(d.x!)!;
    })
    .attr('y', function(d) {
      return y0(d.level);
    })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '14px')
    .attr('fill', 'black')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .text(function(d) {
      return d.text;
    });

  const edge = svg
    .selectAll('.edge')
    .data(edgesData)
    .enter();

  edge.append('line');
};

export const vizUpdate = (className: string, graphData: any[]) => {};
