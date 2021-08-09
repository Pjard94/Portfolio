const burger = document.getElementById("burger-box");
const page = document.getElementById("menu-showing");
const body = document.body;
let menuCheck = 0; //Allows to have an easier switch with the the button thanks IE

// This works in all the browsers some the more easily used functionality doesn't work in IE
burger.addEventListener('click',function showMenu() {
    if (menuCheck === 0) {
        menuCheck = 1;
        body.classList.add('Nav-out')  
    } else {
        menuCheck = 0;
        body.classList.remove('Nav-out')  
    }
});


// This allows for a click anywhere on the page to remove the menu
page.addEventListener('click', function hideMenu() {
    body.classList.remove('Nav-out');
    menuCheck = 0;
})