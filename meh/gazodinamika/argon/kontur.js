google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  let bottom = ["0", "50", "200", "263", "391", "521"];
  let leftSide = [264, 264, 264, 240, 133, 263];
  let dataArray = [["Year", "радиус(мм)"]];
  for (let x = 0; x <= bottom.length; x++) {
    dataArray.push([bottom[x], leftSide[x]]);
  }
  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    title: "Контур сопла",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
