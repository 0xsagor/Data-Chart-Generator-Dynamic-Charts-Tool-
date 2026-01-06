let chart;

function generate() {
  const input = document.getElementById("data").value;
  const values = input.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));

  if (!values.length) return alert("Invalid data");

  const ctx = document.getElementById("chart").getContext("2d");
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: values.map((_, i) => "Item " + (i + 1)),
      datasets: [{
        label: "Values",
        data: values
      }]
    }
  });
}
