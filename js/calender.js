// Sample Event Data
const events = [
  {
    id: 1,
    date: "2023-12-06",
    title: "Parent-Teacher Meeting",
    time: "10:00 AM - 12:00 PM",
    description: "Discuss student progress and other updates.",
  },
  {
    id: 2,
    date: "2023-12-07",
    title: "Science Fair",
    time: "1:00 PM - 4:00 PM",
    description: "Annual school science exhibition for students.",
  },
  {
    id: 3,
    date: "2023-12-10",
    title: "School Sports Day",
    time: "9:00 AM - 5:00 PM",
    description: "All-day sports activities for students and parents.",
  },
];

// Initialize Flatpickr with inline calendar
const calendar = flatpickr("#calendar", {
  inline: true, // Display the calendar inline
  dateFormat: "Y-m-d",
  onChange: function (selectedDates, dateStr) {
    displayEvents(dateStr);
  },
});

// Display Events for Selected Date
function displayEvents(date) {
  const eventContainer = document.getElementById("events");
  eventContainer.innerHTML = ""; // Clear existing events

  // Filter events based on selected date
  const filteredEvents = events.filter((event) => event.date === date);

  if (filteredEvents.length > 0) {
    filteredEvents.forEach((event) => {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");

      eventDiv.innerHTML = `
        <div class="event-title">${event.title}</div>
        <div class="event-time">${event.time}</div>
        <div class="event-description">${event.description}</div>
      `;

      eventContainer.appendChild(eventDiv);
    });
  } else {
    eventContainer.innerHTML = `<div class="no-events">No events for this date.</div>`;
  }
}

// Initialize with today's date
const today = new Date();
displayEvents(today.toISOString().split("T")[0]);
