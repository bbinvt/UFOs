// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
 function handleClick() {
    let date - d3.select('#datetime').property('value');
    let filteredData = tableData;

    if(date) {
      filteredData = filtered.Data.filter(row => row.datetime === date);
    };

    // Rebuild table using filtered data
    buildTable(filteredData);
 }

 // Attach event to listen for the form button
 d3.selectAll('#filter-btn').on('click', handleClick);

 // Build table when page loads
 buildTable(tableData);
