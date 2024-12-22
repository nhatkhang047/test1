const studentsData = [
  {
    id: 1,
    studentId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "1B",
    address: "123 Main St, Anytown, USA",
  },

  // Add more student objects as provided
];

const role = "admin"; // Role for conditional rendering

// Populate the student list table
const studentList = document.getElementById("student-list");

studentsData.forEach((student) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>
        <img src="${student.photo}" alt="${
    student.name
  }" width="40" height="40">
      </td>
      <td>${student.name}</td>
      <td>${student.studentId}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.class}</td>
      <td>${student.address}</td>
      <td>
        <div class="flex gap-2">
          <button class="btn-student">
            <img src="/images/view.png" alt="View" width="14" height="14">
          </button>
          ${
            role === "admin"
              ? `<button class="btn-student">
                   <img src="/images/delete.png" alt="Delete" width="14" height="14">
                 </button>`
              : ""
          }
        </div>
      </td>
    `;

  studentList.appendChild(row);
});
