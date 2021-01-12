//Скрипт меню-гамбургера

//Ставим event listener на кнопку

//Элемент кнопки
const hamburgerButton = document.getElementById("hamburger-button")
//Root элемент, на который вешается класс is-active
const hamburgerGeneral = document.getElementById("hamburger-general")
//Элемент, включающий в себя всё пространство экрана, кроме бургер меню и кнопки
const hamburgerWrapper = document.querySelector(".hamburger__window-wrapper");
//Само меню непосредственно
const hamburgerMenu = document.querySelector(".hamburger__menu");


function toggleHamburgerMenu() {
    hamburgerGeneral.classList.toggle("is-active");
}

function closeHamburgerMenu() {
    hamburgerGeneral.classList.remove("is-active")
}


hamburgerButton.addEventListener("click", toggleHamburgerMenu);
hamburgerWrapper.addEventListener("click", closeHamburgerMenu);
hamburgerMenu.addEventListener("scroll", (e) => {
    e.stopPropagation();
})
document.addEventListener("scroll", (e) => {
    if (hamburgerGeneral.classList.contains("is-active")) {
        toggleHamburgerMenu();
    }
})