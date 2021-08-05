const flyoutMenu = document.getElementById("big-nav");
const burger = document.getElementById("burger-box")

burger.addEventListener('click', function showMenu() {
    flyoutMenu.classList.add("show")
    this.classList.add("hide")
});