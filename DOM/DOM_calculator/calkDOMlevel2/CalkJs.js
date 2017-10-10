var display = get('display');
var first = second = operation = null; // first = первый операнд, second = второй, operation = арифметическая операция
var manageButtons = document.getElementsByClassName('manage'); // управляющие клавиши + - * /
var allButtons = document.getElementsByClassName('btn');       // массив всех клавиш

for(var i = 0; i < allButtons.length; i++){   // этот цикл назначает каждой клавише обработчик событий, проверяющий длину
    var x = allButtons[i].id;                 // строки на дисплее, если она больше 19, то шрифт уменьшается
    get(x).addEventListener('click', checkDisplayLength);
}

for(i = 0; i < manageButtons.length; i++){ //add listeners to manage buttons +, -, *, /
    x = manageButtons[i].id;
    get(x).addEventListener('click', manageButtonPush);
}

for(i = 0; i < 10; i++){  // add listeners to buttons 0, 1, 2, 3... 9
    x = 'id'+i;
    get(x).addEventListener('click', pushButton);
}
get('id.').addEventListener('click',pushPoint);
get('ecv').addEventListener('click',equalPush);
get('clear').addEventListener('click', clear);
get('backsp').addEventListener('click', backspace);

function get(id){            // Функция-хэлпер, облегчает работу с DOM
   return document.getElementById(id)
}

function pushButton(){      // если нажата клавиша - на дисплее добавляется соответствующая цифра или знак
    display.value += this.id[2];
    enableManageButtons();  // и включаются клавиши арифметических действий, если были выключены
}

function disableManageButtons(){
    for(var i = 0; i < manageButtons.length; i++){
        manageButtons[i].setAttribute('disabled','disabled');
    }
    get('ecv').setAttribute('disabled','disabled');
}

function enableManageButtons(){
    for(var i = 0; i < manageButtons.length; i++){
        manageButtons[i].removeAttribute('disabled');
    }
    get('ecv').removeAttribute('disabled');
}

function manageButtonPush(){  // функция срабатывает когда нажато / * - +
    if(operation !== null){ // это условие выполняется если клавиша арифметического действия нажата не в первый раз
        switch (operation){  // этот свитч записывает в переменную first результат прошлого арифметического действия
            case '+': first = first + +display.value.split('+').pop(); break;
            case '-': first = first - +display.value.split('-').pop(); break;
            case 'x': first = first * +display.value.split('x').pop(); break;
            case '/': first = first / +display.value.split('/').pop(); break;
        }
        operation = this.id[2]; // в переменную operation заносится новое значение
        display.value += ' ' + operation + ' ';
        disableManageButtons();
    }else{ // следующий код выполняется если клавиша арифметического действия нажата впервые
        first = display.value.indexOf('=') === -1 ? +display.value : +display.value.split('=').pop();
        operation = this.id[2];
        display.value += ' ' + operation + ' ';
        disableManageButtons();
    }
}

function equalPush(){  // функция которая срабатывает если нажато равно
    // если клавиша равно уже была нажата, то нам надо не все содержимое дисплея, а только последнее выражение
    var expression = display.value.indexOf('=') === -1 ? display.value : display.value.split('=').pop();

    second = +expression.split(operation).pop(); // из последнего выражения получаем второй операнд
    display.value += ' = ';
    switch(operation){
        case '+': display.value += first + second; break;
        case '-': display.value += first - second; break;
        case 'x': display.value += first * second; break;
        case '/': display.value += first / second; break;
    }
    enableManageButtons();
    checkDisplayLength();
    operation = null;
}

function clear(){  // функция очищает переменные и экран
    first = second = operation = null;
    display.value = '';
    enableManageButtons();
    display.removeAttribute('class');
}

function checkDisplayLength(){ // эта функция прикреплена ко всем клавишам, если математическое выражение не помещается на
    if(display.value.length > 19){  // то она уменьшает шрифт
        display.setAttribute('class', 'wide');
    }else{
        display.removeAttribute('class');
    }
}

function backspace(){   // функция для клавиши backspace удаляет последний введенный символ
   var x = display.value.trim();
   if(x[x.length - 1] === '+' || x[x.length - 1] === '-' || x[x.length - 1] === 'x' || x[x.length - 1] === '/'){
       operation = null;
       enableManageButtons();
   }
   display.value = x.slice(0, x.length - 1);
}

function pushPoint(){
    display.value = display.value[display.value.length - 1] === '.' ?
        display.value : display.value + '.';
}
