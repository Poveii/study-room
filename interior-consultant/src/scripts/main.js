const toggleButton = document.querySelector(".toggle");

function onClickMenuButton() {
  toggleButton.addEventListener("click", function () {
    changeMenuIcon();
    showMenu();
  });
}

const menuIcon = document.querySelector(".toggle .material-icons");

function changeMenuIcon() {
  if (menuIcon.textContent == " menu ") {
    menuIcon.textContent = " close ";
  } else menuIcon.textContent = " menu ";
}

const menuButton = document.querySelector(".menu");

function showMenu() {
  if (menuButton.classList == "menu show") {
    menuButton.classList = "menu";
  } else menuButton.classList.add("show");
}

onClickMenuButton();
