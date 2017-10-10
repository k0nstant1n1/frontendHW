
window.onload = function(){
function get(id){
    return document.getElementById(id);
}

function pushButton(){          //  При нажатии на кнопку на дисплей добавляется третий символ айдишника этой кнопки
    display.value += this.id[2];   // айдишники расставлены по такому принципу: 'id' + 'x', где x это ее значение
}

function ManageButtonPush(){                          // эта функция вызывается когда нажата клавиша + - * /
    first = display.value === ''? 0: +display.value;  // first = первое слагаемое. берем с дисплея
    operation = this.id[2];                           // operation = предстоящая математическая операция
    display.value += ' ' + operation + ' ';
    for(var i = 0; i < manageButtons.length; i++){    // когда нажата клавиша математического действия, то далее логично выключить
        manageButtons[i].setAttribute('disabled','disabled'); // клавиши такого рода чтобы избежать ошибок в вычислениях
    }
}

function equaly(){                  // когда нажато равно вызываем эту функцию
    if(display.value.length !== 0){
        second = +display.value.split(operation)[1];  // second = второе слагаемое
        display.value += ' = ';
        switch(operation){
            case '+': display.value += first + second; break;
            case '-': display.value += first - second; break;
            case 'x': display.value += first * second; break;
            case '/': display.value += first / second; break;
        }
        for(var i = 0; i < buttons.length; i++){     // выключаем все кнопки, кроме clear
            buttons[i].setAttribute('disabled','disabled');
        }
    }
}
function clear(){      // эта функция очищает дисплей и включает клавиши
    display.value = '';
for(var i = 0; i < buttons.length; i++){
    buttons[i].removeAttribute('disabled');
}
}
var manageButtons = document.getElementsByClassName('manage'); // управляющие клавиши + - * /
var buttons = document.getElementsByClassName('btn');          // все остальные клавиши
var first;
var operation;
var second;
var display = get('display');
get('id+').onclick = ManageButtonPush;
get('id-').onclick = ManageButtonPush;
get('idx').onclick = ManageButtonPush;
get('id/').onclick = ManageButtonPush;
get('id1').onclick = pushButton;
get('id2').onclick = pushButton;
get('id3').onclick = pushButton;
get('id4').onclick = pushButton;
get('id5').onclick = pushButton;
get('id6').onclick = pushButton;
get('id7').onclick = pushButton;
get('id8').onclick = pushButton;
get('id9').onclick = pushButton;
get('id0').onclick = pushButton;
get('ecv').onclick = equaly;
get('clear').onclick = clear;
};
