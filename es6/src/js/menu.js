(function(){
'use strict';

let menuPoints = ['Home','About Us','Contacts','Production']; // динамический массив с пунктами меню

let list = document.createElement('ul'); // создаем список для меню
list.className = 'menu';

let createMenuPoint = (elem) =>{        // функция которая получает элемент массива и делает из него пункт меню
    let item = document.createElement('a');
    item.innerHTML = elem;
    item.className='menuPoint';
    item.href = "../html/" + elem + ".html";
    list.appendChild(item);
};

let showMenu = (...Points) =>{         // функция, которая формирует и выводит на страницу готовое меню
    Points.map(createMenuPoint);
    document.getElementsByClassName('menuContainer')[0].appendChild(list);
};

showMenu(...menuPoints);
})();

