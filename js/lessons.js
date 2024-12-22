const lessonsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "Tommy Wise" },
  { id: 2, subject: "English", class: "2A", teacher: "Rhoda Frank" },
  { id: 3, subject: "Science", class: "3A", teacher: "Della Dunn" },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "Bruce Rodriguez" },
  { id: 5, subject: "Art", class: "4A", teacher: "Birdie Butler" },
  { id: 6, subject: "Music", class: "5A", teacher: "Bettie Oliver" },
  { id: 7, subject: "History", class: "6A", teacher: "Herman Howard" },
  { id: 8, subject: "Geography", class: "6B", teacher: "Lucinda Thomas" },
  { id: 9, subject: "Physics", class: "6C", teacher: "Ronald Roberts" },
  { id: 10, subject: "Chemistry", class: "4B", teacher: "Julia Pittman" },
];

const role = "admin"; // For conditional rendering

// Populate the lesson table
const lessonList = document.getElementById("lesson-list");

const renderLessons = (data) => {
  lessonList.innerHTML = ""; // Clear table before rendering
  data.forEach((lesson) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${lesson.subject}</td>
        <td>${lesson.class}</td>
        <td>${lesson.teacher}</td>
        <td>
          <div class="flex gap-2">
            <button class="btn-lesson">
              <img src="/images/view.png" alt="View" width="14" height="14">
            </button>
            ${
              role === "admin"
                ? `<button class="btn-lesson">
                     <img src="/images/edit.png" alt="Edit" width="14" height="14">
                   </button>
                   <button class="btn-lesson">
                     <img src="/images/delete.png" alt="Delete" width="14" height="14">
                   </button>`
                : ""
            }
          </div>
        </td>
      `;
    lessonList.appendChild(row);
  });
};

// Initial render
renderLessons(lessonsData);

// Search functionality
document.getElementById("lesson-search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredData = lessonsData.filter((lesson) =>
    lesson.subject.toLowerCase().includes(query)
  );
  renderLessons(filteredData);
});
