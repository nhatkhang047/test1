const eventsData = [
  {
    id: 1,
    title: "Lake Trip",
    class: "1A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 2,
    title: "Picnic",
    class: "2A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 3,
    title: "Science Fair",
    class: "3A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
];

const role = "admin"; // Role for conditional rendering

// Populate the event list table
const eventList = document.getElementById("event-list");

eventsData.forEach((event) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${event.title}</td>
      <td>${event.class}</td>
      <td>${event.date}</td>
      <td>${event.startTime}</td>
      <td>${event.endTime}</td>
      <td>
        <div class="flex gap-2">
          <button class="btn-event">
            <img src="/images/view.png" alt="View" width="14" height="14">
          </button>
          ${
            role === "admin"
              ? `<button class="btn-event">
                   <img src="/images/delete.png" alt="Delete" width="14" height="14">
                 </button>`
              : ""
          }
        </div>
      </td>
    `;

  eventList.appendChild(row);
});
