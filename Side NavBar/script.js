const menu = document.querySelector(".menu");
const navBar = document.querySelector(".navBar");


menu.addEventListener('click', () => {
    navBar.classList.toggle("navToggle")
})