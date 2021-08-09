const burger = document.getElementById("burger-box");
const page = document.getElementById("menu-showing");
const body = document.body;
let menuCheck = 0;

burger.addEventListener('click',function showMenu() {
    if (menuCheck === 0) {
        menuCheck = 1;
        body.classList.add('Nav-out')  
    } else {
        menuCheck = 0;
        body.classList.remove('Nav-out')  
    }
});

page.addEventListener('click', function hideMenu() {
    document.body.classList.remove('Nav-out');
})