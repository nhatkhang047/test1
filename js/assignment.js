// Dữ liệu Assignments
const assignmentsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Anthony Boone",
    dueDate: "2025-01-01",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Clifford Bowen",
    dueDate: "2025-01-01",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Catherine Malone",
    dueDate: "2025-01-01",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Willie Medina",
    dueDate: "2025-01-01",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Jose Ruiz",
    dueDate: "2025-01-01",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Katharine Owens",
    dueDate: "2025-01-01",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Shawn Norman",
    dueDate: "2025-01-01",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Don Holloway",
    dueDate: "2025-01-01",
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "Franklin Gregory",
    dueDate: "2025-01-01",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "Danny Nguyen",
    dueDate: "2025-01-01",
  },
];

// Đảm bảo rằng DOM đã sẵn sàng trước khi truy cập phần tử
document.addEventListener("DOMContentLoaded", () => {
  // Role để render conditionally
  const role = "admin";

  // Kiểm tra xem phần tử có tồn tại trước khi thực hiện
  const assignmentList = document.getElementById("assignment-list");
  if (!assignmentList) {
    console.error("Phần tử với id 'assignment-list' không tồn tại trong DOM.");
    return;
  }

  // Render bảng Assignments
  assignmentsData.forEach((assignment) => {
    const row = document.createElement("tr");

    // Sử dụng template string để tạo nội dung hàng
    row.innerHTML = `
        <td>${assignment.subject}</td>
        <td>${assignment.class}</td>
        <td>${assignment.teacher}</td>
        <td>${assignment.dueDate}</td>
        <td>
          <div class="flex gap-2">
            <button class="btn-assignment">
              <img src="/images/view.png" alt="View" width="14" height="14" />
            </button>
            ${
              role === "admin"
                ? `<button class="btn-assignment">
                     <img src="/images/delete.png" alt="Delete" width="14" height="14" />
                   </button>`
                : ""
            }
          </div>
        </td>
      `;

    // Thêm hàng vào bảng
    assignmentList.appendChild(row);
  });
});
