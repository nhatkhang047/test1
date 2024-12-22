// Sample data for announcements with Description field
const announcementData = [
  {
    id: 1,
    title: "Holiday Announcement",
    category: "Event",
    date: "2024-12-15",
    description:
      "The office will be closed for the holidays from 24th December to 2nd January.",
  },
  {
    id: 2,
    title: "New Policy Updates",
    category: "Information",
    date: "2024-12-10",
    description:
      "Our new policy updates will take effect from January 1st, 2025.",
  },
  {
    id: 2,
    title: "New Policy Updates",
    category: "Information",
    date: "2024-12-10",
    description:
      "Our new policy updates will take effect from January 1st, 2025.",
  },
  {
    id: 2,
    title: "New Policy Updates",
    category: "Information",
    date: "2024-12-10",
    description:
      "Our new policy updates will take effect from January 1st, 2025.",
  },
  {
    id: 2,
    title: "New Policy Updates",
    category: "Information",
    date: "2024-12-10",
    description:
      "Our new policy updates will take effect from January 1st, 2025.",
  },
  {
    id: 2,
    title: "New Policy Updates",
    category: "Information",
    date: "2024-12-10",
    description:
      "Our new policy updates will take effect from January 1st, 2025.",
  },
  {
    id: 2,
    title: "New Policy Updates",
    category: "Information",
    date: "2024-12-10",
    description:
      "Our new policy updates will take effect from January 1st, 2025.",
  },
  {
    id: 2,
    title: "New Policy Updates",
    category: "Information",
    date: "2024-12-10",
    description:
      "Our new policy updates will take effect from January 1st, 2025.",
  },
];

const role = "admin"; // Role for conditional rendering

// Populate table with announcement data
const announcementItems = document.getElementById("announcement-items");

announcementData.forEach((announcement) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${announcement.title}</td>
      <td>${announcement.id}</td>
      <td>${announcement.category}</td>
      <td>${announcement.date}</td>
      <td>${announcement.description}</td> <!-- Added Description -->
      <td>
        <div class="flex gap-2">
          <button class="announcement-btn">
            <img src="images/view.png" alt="View" width="14" height="14" />
          </button>
          ${
            role === "admin"
              ? `<button class="announcement-btn">
                   <img src="images/edit.png" alt="Edit" width="14" height="14" />
                 </button>
                 <button class="announcement-btn">
                   <img src="images/delete.png" alt="Delete" width="14" height="14" />
                 </button>`
              : ""
          }
        </div>
      </td>
    `;

  announcementItems.appendChild(row);
});
