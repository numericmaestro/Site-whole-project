//Стили
import './styles/index.scss';

//Скрипты
import Aos from 'aos';
Aos.init();

import './scripts/hamburger';

//focus-visible polyfil
require('focus-visible/dist/focus-visible.min.js')

//Карусель
import Siema from 'siema';
new Siema({
    selector: '.siema',
    perPage: 1,
});


