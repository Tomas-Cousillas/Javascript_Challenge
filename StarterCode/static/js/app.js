
// Bonus attempt
// Select the button

var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
 
 // //  Use d3 to update each cell's text with UFO report values 
  data.forEach(function(UFOReport) {
    //console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
     console.log(key, value);
 // // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn1");

button.on("click", function() {

    var Table = document.getElementById("tbody");
    Table.innerHTML = "";
  
// Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
        console.log(inputElement);
  
// Get the value property of the input element
    var inputValue = inputElement.property("value");
  
        console.log(inputValue);
        console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
     // //  Use d3 to update each cell's text with UFO report values 
     filteredData.forEach(function(UFOReport) {
    //console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
     console.log(key, value);
 // // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
        console.log(filteredData);
});

var button = d3.select("#filter-btn2");

button.on("click", function() {

    var Table = document.getElementById("tbody");
    Table.innerHTML = "";
  
// Select the input element and get the raw HTML node
    var inputElement = d3.select("#city");
        console.log(inputElement);
  
// Get the value property of the input element
    var inputValue = inputElement.property("value");
  
        console.log(inputValue);
        console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.city === inputValue);
     // //  Use d3 to update each cell's text with UFO report values 
     filteredData.forEach(function(UFOReport) {
    //console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
     console.log(key, value);
 // // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
        console.log(filteredData);
});

var button = d3.select("#filter-btn3");

button.on("click", function() {

    var Table = document.getElementById("tbody");
    Table.innerHTML = "";
  
// Select the input element and get the raw HTML node
    var inputElement = d3.select("#state");
        console.log(inputElement);
  
// Get the value property of the input element
    var inputValue = inputElement.property("value");
  
        console.log(inputValue);
        console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.state === inputValue);
     // //  Use d3 to update each cell's text with UFO report values 
     filteredData.forEach(function(UFOReport) {
    //console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
     console.log(key, value);
 // // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
        console.log(filteredData);
});

var button = d3.select("#filter-btn4");

button.on("click", function() {

    var Table = document.getElementById("tbody");
    Table.innerHTML = "";
  
// Select the input element and get the raw HTML node
    var inputElement = d3.select("#country");
        console.log(inputElement);
  
// Get the value property of the input element
    var inputValue = inputElement.property("value");
  
        console.log(inputValue);
        console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.country === inputValue);
     // //  Use d3 to update each cell's text with UFO report values 
     filteredData.forEach(function(UFOReport) {
    //console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
     console.log(key, value);
 // // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
        console.log(filteredData);
});

var button = d3.select("#filter-btn5");

button.on("click", function() {

    var Table = document.getElementById("tbody");
    Table.innerHTML = "";
  
// Select the input element and get the raw HTML node
    var inputElement = d3.select("#shape");
        console.log(inputElement);
  
// Get the value property of the input element
    var inputValue = inputElement.property("value");
  
        console.log(inputValue);
        console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.shape === inputValue);
     // //  Use d3 to update each cell's text with UFO report values 
     filteredData.forEach(function(UFOReport) {
    //console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
     console.log(key, value);
 // // Append a cell to the row for each value in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
        console.log(filteredData);
});

var button = d3.select("#filter-btn6");

button.on("click", function() {

    var Table = document.getElementById("tbody");
    Table.innerHTML = "";

    // Get a reference to the table body
    var tbody = d3.select("tbody");
     
     // //  Use d3 to update each cell's text with UFO report values 
      data.forEach(function(UFOReport) {
        //console.log(UFOReport);
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function([key, value]) {
         console.log(key, value);
     // // Append a cell to the row for each value in the UFO report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
});


function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("ufo-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }