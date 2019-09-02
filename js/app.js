// from data.js
var tableData = data;
tbody = d3.select("tbody")
// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function displayData(data){
   tbody.text("")
   data.forEach(function(sighting){
   new_tr = tbody.append("tr")
   Object.entries(sighting).forEach(function([key, value]){
       new_td = new_tr.append("td").text(value)    
   })
})}
displayData(tableData)
//select the web user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")
// filter data with date that the user inputs
function clickSelect(){
   //don't refresh the page!
   d3.event.preventDefault();
   //print the date value on the console that was entered as input to filter the data
   console.log(dateInputText.property("value"));
   //New table created to show only the filterd data
   var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
   //display the new table
   displayData(new_table);
}
// event listener to handle change and click
dateInputText.on("change", clickSelect)
