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
  data.addColumn("number", "Скорость");

  //построение графика

  for (let i = 0; i < speedArray.length; i++) {
    let b = String(i);
    data.addRows([[b, speedArray[i]]]);
  }
  // Set chart options
  var options = {
    title: "График изменения скорости",
    width: 1900,
    height: 500,
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div_scorost")
  );
  chart.draw(data, options);
}

localStorage.getItem("lambdaArray");
let akp = Math.sqrt((2 * k * 8.31 * 20 + 273.15) / (k + 1));
let speedArray = [];
for (let i = 0; i < lambdaArray.length; i++) {
  speedArray[i] = akp * lambdaArray[i];
}
