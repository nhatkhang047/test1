const resultsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "John Doe",
    student: "John Doe",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  // Thêm các dữ liệu khác ở đây
];

const role = "admin"; // Vai trò người dùng (admin có thêm quyền xóa)

// Lấy phần tử tbody để render dữ liệu
const resultsList = document.getElementById("results-list");

// Render bảng kết quả học tập
resultsData.forEach((result) => {
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${result.subject}</td>
        <td>${result.class}</td>
        <td>${result.teacher}</td>
        <td>${result.student}</td>
        <td>${result.date}</td>
        <td>${result.type}</td>
        <td>${result.score}</td>
        <td>
          <div class="flex gap-2">
            <button class="btn-results">
              <img src="/images/view.png" alt="View" width="14" height="14" />
            </button>
            ${
              role === "admin"
                ? `<button class="btn-results">
                     <img src="/images/delete.png" alt="Delete" width="14" height="14" />
                   </button>`
                : ""
            }
          </div>
        </td>
      `;

  resultsList.appendChild(row);
});
