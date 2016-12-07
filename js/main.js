// https://bost.ocks.org/mike/miserables/

var dataset = [];                        
for (var i = 0; i < 18; i++) {           
    var newNumber = i; //Math.random() * 20; 
    dataset.push(newNumber);             
}

var master = [];
for (var i = 0; i < 18; i++) {           
    master.push(dataset);             
}

var master = [
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
];

// selecting the body
var body = d3.select("body");

// append a table element to the body
var table = body.append("table");

// append entering rows to the table via data-join (Since selectAll is called on the selected table element, it establishes a new parent node of table instead of the default html)
var tr = table.selectAll("tr")
        .data(master)
        .enter()
        .append("tr");

// append entering cells to each row
var td = tr.selectAll("td")
        .data(function(d) { return d; })
        .enter()
        .append("td");


// add content from the dataset
var content = td.text(function(d) { return d; });

// manipulate colour of specific cells and rows: j is row ,and i is column
td.style("color", function(d, i, j) { 
	console.log(j, i);
	return (j<2 && i<2 ) ? null : "red"; 
});






// d3.select("body").selectAll("div")
// .data(dataset)
// .enter()
// .append("div")
// .attr("class", "bar").style("height", function(d) {
// 	var barHeight = d * 6; 
// 	return barHeight + "px";
// });

// Data inside the DOM __data__
// When chaining methods together, 
// anytime after you call data(), you can create an anonymous function that accepts d as input. 
// The magical data() method ensures that d is set to the corresponding value in your original data set, given the current element at hand.