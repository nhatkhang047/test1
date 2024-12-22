const examData = [
  {
    id: 1,
    name: "Mathematics Final",
    class: "10A",
    date: "2024-01-15",
    duration: "2 hours",
  },
  {
    id: 2,
    name: "Physics Midterm",
    class: "11B",
    date: "2024-01-20",
    duration: "1.5 hours",
  },
  {
    id: 3,
    name: "Chemistry Quiz",
    class: "12A",
    date: "2024-01-25",
    duration: "1 hour",
  },
];

const role = "admin"; // Role for conditional rendering

// Populate the exam list table
const examList = document.getElementById("exam-list");

examData.forEach((exam) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${exam.name}</td>
      <td>${exam.class}</td>
      <td>${exam.date}</td>
      <td>${exam.duration}</td>
      <td>
        <div class="flex gap-2">
          <button class="btn-exam">
            <img src="/images/view.png" alt="View" width="14" height="14">
          </button>
          ${
            role === "admin"
              ? `<button class="btn-exam">
                   <img src="/images/delete.png" alt="Delete" width="14" height="14">
                 </button>`
              : ""
          }
        </div>
      </td>
    `;

  examList.appendChild(row);
});

// Search functionality
const searchExamInput = document.getElementById("search-exam");

searchExamInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const rows = examList.querySelectorAll("tr");

  rows.forEach((row) => {
    const examName = row.children[0].textContent.toLowerCase();
    if (examName.includes(searchValue)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
