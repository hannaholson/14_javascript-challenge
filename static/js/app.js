// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function CreateTable (data) {
  tbody.html("");
  data.forEach(function(ufoReport) {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});
}

CreateTable(tableData);

function filterbythis() {
  var input = document.getElementById("datetime").value;
  console.log(input);
  var filterData = tableData.filter(row => row.datetime === input);
  console.log(filterData);
 CreateTable(filterData);
};
