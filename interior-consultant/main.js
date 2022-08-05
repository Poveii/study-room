const toggleButton = document.querySelector(".toggle");
const menuButton = document.querySelector(".menu");
const menuIcon = document.querySelector(".toggle .material-icons");

function onClickMenuButton() {
  toggleButton.addEventListener("click", function () {
    menuIcon.textContent == " menu "
      ? (menuIcon.textContent = " close ")
      : (menuIcon.textContent = " menu ");
    menuButton.classList.toggle("show");
  });
}

onClickMenuButton();
