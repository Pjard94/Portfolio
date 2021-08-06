const flyoutMenu = document.getElementById("big-nav");
const burger = document.getElementById("burger-box");
const page = document.getElementById("page");

burger.addEventListener('click', function showMenu() {
    flyoutMenu.classList.add("show");
    this.classList.add("hide");
    page.classList.add("menu-showing");
});

page.addEventListener('click', function hideMenu() {
    flyoutMenu.classList.remove("show");
    burger.classList.remove("hide");
    page.classList.remove("menu-showing");
})