google.charts.load("current", { packages: ["corechart"] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Number");
  data.addColumn("number", "Давление");

  //построение графика

  for (let i = 0; i < davlArray.length; i++) {
    let b = String(i);
    data.addRows([[b, davlArray[i]]]);
  }
  // Set chart options
  var options = {
    title: "График изменения давления",
    width: 1900,
    height: 500,
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div_davlenie")
  );
  chart.draw(data, options);
}

localStorage.getItem("lambdaArray");
let davlArray = [];
for (let i = 0; i < lambdaArray.length; i++) {
  davlArray[i] = 1 - ((k - 1) / (k + 1)) * lambdaArray[i] * lambdaArray[i];
}
