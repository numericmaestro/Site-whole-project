//Стили
import './styles/index.scss';

//Скрипты
import './scripts/hamburger';
import './scripts/onScrollAnimations';

//focus-visible polyfil
require('focus-visible/dist/focus-visible.min.js')

//Карусель
import Siema from 'siema';
new Siema({
    selector: '.siema',
    perPage: 1,
});


