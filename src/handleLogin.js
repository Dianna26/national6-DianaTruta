const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");

import './style.css';

const PASSWORD_CHECK = "123";
let login = document.getElementById("login");
if (login) {
  login.addEventListener("click", () => {
    const name = inputName.value;
    const password = inputPassword.value;

    if (name && password === PASSWORD_CHECK) {
      document.cookie = `name=${name}`;
      document.cookie = `password=${password}`;
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      window.location = "/dist/";
    }
  });
}