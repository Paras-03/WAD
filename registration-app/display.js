window.onload = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const tbody = document.querySelector("#userTable tbody");
  
    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.fname}</td>
        <td>${user.lname}</td>
        <td>${user.dob}</td>
        <td>${user.gender}</td>
        <td>${user.mobile}</td>
        <td>${user.email}</td>
      `;
      tbody.appendChild(row);
    });
  };
  