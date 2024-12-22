// Parent data
const parentData = [
  {
    id: 1,
    name: "John Doe",
    students: ["Sarah Brewer"],
    email: "john@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    name: "Jane Doe",
    students: ["Cecilia Bradley"],
    email: "jane@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    name: "Mike Geller",
    students: ["Fanny Caldwell"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    name: "Jay French",
    students: ["Mollie Fitzgerald", "Ian Bryant"],
    email: "jay@french.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    name: "Jane Smith",
    students: ["Mable Harvey"],
    email: "jane@smith.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    name: "Anna Santiago",
    students: ["Joel Lambert"],
    email: "anna@santiago.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    name: "Allen Black",
    students: ["Carrie Tucker", "Lilly Underwood"],
    email: "allen@black.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    name: "Ophelia Castro",
    students: ["Alexander Blair"],
    email: "ophelia@castro.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    name: "Derek Briggs",
    students: ["Susan Webster", "Maude Stone"],
    email: "derek@briggs.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    name: "John Glover",
    students: ["Stella Scott"],
    email: "john@glover.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
];

const role = "admin"; // Role for conditional rendering

// Populate the parent list table
const parentList = document.getElementById("parent-list");

parentData.forEach((parent) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>
        <div class="flex items-center">
          <div style="margin-left: 12px;">
            <p>${parent.name}</p>
          </div>
        </div>
      </td>
      <td>${parent.id}</td>
      <td>${parent.students.join(", ")}</td>
      <td>${parent.phone}</td>
      <td>${parent.address}</td>
      <td>
        <div class="flex gap-2">
          <button class="btn-parent">
            <img src="images/view.png" alt="View" width="14" height="14">
          </button>
          ${
            role === "admin"
              ? `<button class="btn-parent">
                   <img src="images/delete.png" alt="Delete" width="14" height="14">
                 </button>`
              : ""
          }
        </div>
      </td>
    `;

  parentList.appendChild(row);
});
