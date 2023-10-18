const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const formData = new FormData(event.target); 

  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value; 
  });

  if (!userData.email || !userData.password) {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(userData);
    loginForm.reset();
  }
});
