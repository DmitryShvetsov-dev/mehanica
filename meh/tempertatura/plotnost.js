localStorage.getItem("tempArrayConnect");
let davl = localStorage.getItem("davlenieArrayConnect");
google.charts.load("current", { packages: ["corechart"] });
let davlArray = davl.split(",");
let numDavlArray = [];
for (let i = 0; i < 250; i++) {
  numDavlArray[i] = Number(davlArray[i]);
}
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Number");
  data.addColumn("number", "Плотность");
  //построение графика
  for (let i = 0; i < plotnostArray.length; i++) {
    let b = String(i);
    data.addRows([[b, plotnostArray[i]]]);
  }
  // Set chart options
  var options = {
    title: "График изменения плотности",
    width: 1900,
    height: 500,
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div_plotnost")
  );
  chart.draw(data, options);
}

let plotnostArray = [];
for (let i = 0; i < 250; i++) {
  plotnostArray[i] =
    (0.029 * numDavlArray[i]) / ((tempArray[i] + 273.15) * 8.314);
}
