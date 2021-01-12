
//Инициализируем библиотеку
import Aos from 'aos';

// Aos.init()

document.addEventListener("DOMContentLoaded", (e) => {
    //Список, содержащий элементы dom
    let elements = [];

    elements = addDomListToArray(document.querySelectorAll(".s-company-promises__item"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-partners__item"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-delivery__item"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-reliability__item"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-accent-banner__item"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-awards__item"), elements);

    elements.forEach((domElement) => {
        domElement.setAttribute("data-aos", "fade-up");
    });
    
    elements = []
    elements = addDomListToArray(document.querySelectorAll(".s-company-we__item"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-accent__item"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-accent__buttons-block"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-more"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-description__item:nth-child(even)"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-how__image"), elements);
    
    elements.forEach((domElement) => {
        domElement.setAttribute("data-aos", "fade-right");
    });
    
    elements = []
    elements = addDomListToArray(document.querySelectorAll(".s-company-how__item"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-how__buttons-block"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-we__feedback"), elements);
    // elements = addDomListToArray(document.querySelectorAll(".s-company-wecare__image-block"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-description__item:nth-child(odd)"), elements);
    
    elements.forEach((domElement) => {
        domElement.setAttribute("data-aos", "fade-left");
    });
    



    elements = []
    elements = addDomListToArray(document.querySelectorAll(".s-index-page__loudphrase"), elements);
    elements = addDomListToArray(document.querySelectorAll(".s-company-order__buttons-block"), elements);
    
    elements.forEach((domElement) => {
        domElement.setAttribute("data-aos", "zoom-out");
    });

    Aos.init()
});


/**
 * Добавить элементы NodeList в массив
 * @param {NodeList} domList nodeList, который можно получить такими функциями, как querySelector или childNodes
 * @param {Array} targetArray массив, в который нужно добавить элементы node листа
 */
function addDomListToArray(domList, targetArray = []) {
    return targetArray.concat(Array.from(domList));
}
