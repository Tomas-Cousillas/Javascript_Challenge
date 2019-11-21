// YOUR CODE HERE!
// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
 
  // Step 3:  Use `Object.entries` to console.log each UFO report value
  data.forEach(function(UFOReport) {
    //console.log(UFOReport);
    var row = tbody.append("tr");
 
    Object.entries(UFOReport).forEach(function([key, value]) {
      //console.log(key, value);
    });
  });

 // // Step 4: Use d3 to update each cell's text with UFO report values 
  data.forEach(function(UFOReport) {
    //console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
     //console.log(key, value);
 // // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Bonus attempt
// Select the button

var tableData = data;

var button = d3.select("#button");

button.on("click", function() {
  
// Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
        console.log(inputElement);
  
// Get the value property of the input element
    var inputValue = inputElement.property("value");
  
        console.log(inputValue);
        console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
        console.log(filteredData);
});
