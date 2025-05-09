document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
  
    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }
  
    const user = { fname, lname, dob, gender, mobile, email };
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("User Registered Successfully!");
    this.reset();
  });
  