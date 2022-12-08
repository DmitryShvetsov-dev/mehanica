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
  data.addColumn("number", "Температура");

  //построение графика

  for (let i = 0; i < tempArray.length; i++) {
    let b = String(i);
    data.addRows([[b, tempArray[i]]]);
  }
  // Set chart options
  var options = {
    title: "График изменения температуры",
    width: 1900,
    height: 500,
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div_temperatura")
  );
  chart.draw(data, options);
}

localStorage.getItem("lambdaArray");
let tempArray = [];
for (let i = 0; i < lambdaArray.length; i++) {
  tempArray[i] = Math.pow(
    1 - ((k - 1) / (k + 1)) * lambdaArray[i] * lambdaArray[i],
    1 / (k - 1)
  );
}
