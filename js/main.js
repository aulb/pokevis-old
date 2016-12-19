var dataset = [
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 20 },
  { label: 'Cantaloupe', count: 30 },
  { label: 'Dijkstra', count: 40 }
];

var svgHeight = 400;
var svgWidth = 500;
var width = 400;
var height = 400;
var radius = Math.min(width, height) / 2;

var donutWidth = 50;

var legendRectSize = 18;
var legendSpacing = 4;

// Define our own colors for Pokemon
var color = d3.scaleOrdinal(d3.schemeCategory20b);

var svg = d3.select('#pokeChart')
			.append('svg')
			.attr('width', svgWidth)
			.attr('height', svgHeight)
			.append('g')
			.attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

var arc = d3.arc()
			.innerRadius(radius - donutWidth)
			.outerRadius(radius);

var pie = d3.pie()
			.value(function(d) { return d.count; })
			.sort(null); 

// disable sorting of the entries
// sorting mess with animation
var path = svg.selectAll('path')
			  .data(pie(dataset))
			  .enter()
			  .append('path')
			  .attr('d', arc)
			  .attr('fill', function(d, i) {
			  		return color(d.data.label);
			  });
// .selectAll(el).data(data).enter().append(el)
// what does that mean???

// 3
var legend = svg.selectAll('.legend')
				.data(color.domain())
				.enter()
				.append('g')
				.attr('class', 'legend')
				.attr('transform', function(d, i) {
					var height = legendRectSize + legendSpacing;
					var offset = height * color.domain().length / 2;
					var horz = 12 * legendRectSize; // relative to the center
					var verz = i * height - offset;
					return 'translate(' + horz + ',' + verz + ')';
				});
// i is the index of the data

legend.append('rect')
	  .attr('width', legendRectSize)
	  .attr('height', legendRectSize)
	  .style('fill', color)
	  .style('stroke', color);

legend.append('text')
	  .attr('x', legendRectSize + legendSpacing)
	  .attr('y', legendRectSize - legendSpacing)
	  .text(function(d) { return d; });

