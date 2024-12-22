// Data for Attendance Chart
const attendanceChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Present",
      data: [60, 70, 90, 90, 65],
      backgroundColor: "#FAE27C",
      borderRadius: 10,
      barPercentage: 0.8,
    },
    {
      label: "Absent",
      data: [40, 60, 75, 75, 55],
      backgroundColor: "#C3EBFA",
      borderRadius: 10,
      barPercentage: 0.8,
    },
  ],
};

const attendanceChartOptions = {
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
      padding: 8,
      bodyFont: { size: 12 },
      titleFont: { size: 14 },
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

// Initialize Attendance Chart
const attendanceChartCtx = document
  .getElementById("attendanceChart")
  .getContext("2d");
new Chart(attendanceChartCtx, {
  type: "bar",
  data: attendanceChartData,
  options: attendanceChartOptions,
});
