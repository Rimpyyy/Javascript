// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");
function displayTable(info) {
   info.forEach((event) => {
       var tr = tbody.append("tr");
       tr.append("td").text(event.datetime);
       tr.append("td").text(event.city);
       tr.append("td").text(event.state);
       tr.append("td").text(event.country);
       tr.append("td").text(event.shape);
       tr.append("td").text(event.durationMinutes);
       tr.append("td").text(event.comments);
   });
};
displayTable(tableData);
function filtering(selection, entry) {
   filteredData = tableData.filter(event => event[selection] === entry);
   displayTable(filteredData);
};
submit.on("click", function() {
   d3.event.preventDefault();
   tbody.html('');
   var dateInput = d3.select("#datetime").property("value");
   var cityInput = d3.select('#city').property("value");
   var stateInput = d3.select("#state").property("value");
   var countryInput = d3.select("#country").property("value");
   var shapeInput = d3.select("#shape").property("value");
   if (dateInput) {
       filtering('datetime', dateInput);
   } else if (cityInput) {
       filtering('city', cityInput);
   } else if (stateInput) {
       filtering('state', stateInput);
   } else if (countryInput) {
       filtering('country', countryInput);
   } else if (shapeInput) {
       filtering('shape', shapeInput);
   } else {
       alert('You didn\'t input anything')
   };
});