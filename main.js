const password = document.querySelector(".password");
const hiddenPassword = document.querySelector(".hidden-pass");

hiddenPassword.onclick = () => {
  hiddenPassword.classList.add("fa-eye-slash");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
    hiddenPassword.classList.remove("fa-eye-slash");
  }
};
