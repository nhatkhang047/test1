// Radial Chart Data for Count Chart
const countChartData = {
  labels: ["Boys", "Girls"],
  datasets: [
    {
      data: [53, 47], // Percentage for Boys and Girls
      backgroundColor: ["#C3EBFA", "#FAE27C"],
      hoverBackgroundColor: ["#A9D7E6", "#E9D067"],
    },
  ],
};

const countChartOptions = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  responsive: true,
  maintainAspectRatio: false,
  cutout: "60%", // To create a donut-style chart
};

// Initialize Count Chart
const countChartCtx = document
  .getElementById("radialBarChart")
  .getContext("2d");
new Chart(countChartCtx, {
  type: "doughnut",
  data: countChartData,
  options: countChartOptions,
});
