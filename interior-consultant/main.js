const menuButton = document.querySelector(".menu");
const toggleButton = document.querySelector(".toggle");
const menuIcon = document.querySelector(".toggle .material-icons");

function toggleShowMenu() {
  menuIcon.textContent == " menu "
    ? (menuIcon.textContent = " close ")
    : (menuIcon.textContent = " menu ");

  menuButton.classList.toggle("show");
}

toggleButton.addEventListener("click", function () {
  toggleShowMenu();
});

const menuLinks = document.querySelectorAll(".title");

for (const link of menuLinks) {
  link.addEventListener("click", function () {
    const menuLinkActive = document.querySelector(".active");
    menuLinkActive.classList.remove("active");

    link.classList.add("active");
    toggleShowMenu();
  });
}
