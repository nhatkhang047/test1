document.addEventListener("DOMContentLoaded", function () {
  const financeChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          4000, 3000, 2000, 2780, 1890, 2390, 3490, 3490, 3490, 3490, 3490,
          3490,
        ],
        borderColor: "#C3EBFA",
        backgroundColor: "rgba(195, 235, 250, 0.2)",
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: "Expense",
        data: [
          2400, 1398, 9800, 3908, 4800, 3800, 4300, 4300, 4300, 4300, 4300,
          4300,
        ],
        borderColor: "#CFCEFF",
        backgroundColor: "rgba(207, 206, 255, 0.2)",
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  const financeChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderWidth: 1,
        borderColor: "#ddd",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#d1d5db" },
      },
      y: {
        grid: { color: "#ddd", drawBorder: false },
        ticks: { color: "#d1d5db" },
      },
    },
  };

  const financeChartCtx = document
    .getElementById("financeChart")
    .getContext("2d");
  new Chart(financeChartCtx, {
    type: "line",
    data: financeChartData,
    options: financeChartOptions,
  });
});
