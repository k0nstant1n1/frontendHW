
window.addEventListener('load', onWindowLoad);

function onWindowLoad(){
    var divs = document.getElementsByTagName('div');  // вытаскиваем дивы из DOM
    var colors = ['blue', 'green', 'yellow', 'red', '#cc00cc'];

    for(var i = 0; i < divs.length; i++){        // Этот цикл дает каждому диву цвет и добавляет обработчик событий
        divs[i].style.backgroundColor=colors[i];
        divs[i].addEventListener('click', setBehaviorToDiv);
    }

    function setBehaviorToDiv(){
        var div = this;
        div.addEventListener('keydown',moveDiv);

        function moveDiv(thisEvent){         // Вот тут интересное место: я могу как угодно называть аргумент функции
            switch(thisEvent.keyCode){        // moveDiv , но браузер как-то понимает что передаваемый аргумен есть
                case 37 : moveLeft(10); break;  // обьект произошедшего события. Это чудо?)
                case 38 : moveTop(10); break;
                case 39 : moveRight(10); break;
                case 40 : moveDown(10); break;
            }
        }
        function moveDown(px){
            var top = +div.style.top.slice(0, div.style.top.length - 2);   //Берем значение свойства top из обьекта ДОМ
            div.style.top = top + px + 'px';                               // И меняем его на несколько пикселей
        }
        function moveTop(px){
            var top = +div.style.top.slice(0, div.style.top.length - 2);
            div.style.top = top - px + 'px';
        }
        function moveLeft(px){
            var left = +div.style.left.slice(0, div.style.left.length - 2);
            div.style.left = left - px + 'px';
        }
        function moveRight(px){
            var left = +div.style.left.slice(0, div.style.left.length - 2);
            div.style.left = left + px + 'px';
        }
    }
}