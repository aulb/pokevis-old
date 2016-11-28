var dataset = [];                        
for (var i = 0; i < 25; i++) {           
    var newNumber = Math.random() * 30; 
    dataset.push(newNumber);             
}

d3.select("body").selectAll("div")
.data(dataset)
.enter()
.append("div")
.attr("class", "bar").style("height", function(d) {
	var barHeight = d * 5; 
	return barHeight + "px";
});

// Data inside the DOM __data__
// When chaining methods together, 
// anytime after you call data(), you can create an anonymous function that accepts d as input. 
// The magical data() method ensures that d is set to the corresponding value in your original data set, given the current element at hand.