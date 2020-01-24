import * as d3 from 'd3';

export const vizEnter = (className: string, graphData: any[]) => {
  var margin = { top: 80, right: 80, bottom: 80, left: 80 },
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  var x = d3
    .scaleBand()
    .rangeRound([0, width])
    .padding(0.1);

  var y0 = d3
    .scaleLinear()
    .domain([300, 1100])
    .range([height, 0]),
    y1 = d3
      .scaleLinear()
      .domain([20, 80])
      .range([height, 0]);

  var xAxis = d3.axisBottom(x);

  // create left yAxis
  var yAxisLeft = d3.axisLeft(y0).ticks(4);
  // create right yAxis
  var yAxisRight = d3.axisRight(y1).ticks(6);

  var svg = d3
    .select('.viz')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('class', 'graph')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const data = [
    { year: 2005, money: 550, number: 35 },
    { year: 2006, money: 600, number: 40 },
    { year: 2007, money: 700, number: 45 },
    { year: 2008, money: 800, number: 60 },
    { year: 2009, money: 900, number: 70 },
    { year: 2010, money: 850, number: 65 },
    { year: 2011, money: 880, number: 67 },
    { year: 2012, money: 900, number: 70 },
    { year: 2013, money: 1000, number: 75 },
  ];
  x.domain(
    data.map(function (d: { year: number }) {
      return d.year + '';
    })
  );
  y0.domain([
    0,
    d3.max(data, function (d: { money: number }) {
      return d.money;
    })!,
  ]);

  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);

  svg
    .append('g')
    .attr('class', 'y axis axisLeft')
    .attr('transform', 'translate(0,0)')
    .call(yAxisLeft)
    .append('text')
    .attr('y', 6)
    .attr('dy', '-2em')
    .style('text-anchor', 'end')
    .style('text-anchor', 'end')
    .text('Dollars');

  svg
    .append('g')
    .attr('class', 'y axis axisRight')
    .attr('transform', 'translate(' + width + ',0)')
    .call(yAxisRight)
    .append('text')
    .attr('y', 6)
    .attr('dy', '-2em')
    .attr('dx', '2em')
    .style('text-anchor', 'end')
    .text('#');

  const bars = svg
    .selectAll('.bar')
    .data(data)
    .enter();

  bars
    .append('rect')
    .attr('class', 'bar1')
    .attr('x', function (d) {
      return x(d.year + '')!;
    })
    .attr('width', x.bandwidth() / 2)
    .attr('y', function (d) {
      return y0(d.money);
    })
    .attr('height', function (d, i, j) {
      return height - y0(d.money);
    });

  bars
    .append('rect')
    .attr('class', 'bar2')
    .attr('x', function (d) {
      return x(d.year + '')! + x.bandwidth() / 2;
    })
    .attr('width', x.bandwidth() / 2)
    .attr('y', function (d) {
      return y1(d.number);
    })
    .attr('height', function (d, i, j) {
      return height - y1(d.number);
    });
};

export const vizUpdate = (className: string, graphData: any[]) => { };
