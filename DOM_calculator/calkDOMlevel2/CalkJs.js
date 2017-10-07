
function get(id){
   return document.getElementById(id)
}

function pushButton(){
    display.value += this.id[2];
}

function disableManageButtons(){
    for(var i = 0; i < manageButtons.length; i++){
        manageButtons[i].setAttribute('disabled','disabled');
    }
}

function enableManageButtons(){
    for(var i = 0; i < manageButtons.length; i++){
        manageButtons[i].removeAttribute('disabled');
    }
}

function manageButtonPush(){
    first = display.value.indexOf('=') === -1 ? +display.value : +display.value.split('=').pop();
    operation = this.id[2];
    display.value += ' ' + operation + ' ';
    disableManageButtons();
}

function equalPush(){
    var expression = display.value.indexOf('=') === -1 ? display.value : display.value.split('=').pop();
    second = +expression.split(operation)[1];
    display.value += ' = ';
    switch(operation){
        case '+': display.value += first + second; break;
        case '-': display.value += first - second; break;
        case 'x': display.value += first * second; break;
        case '/': display.value += first / second; break;
    }
    enableManageButtons();
    checkDisplayLength();
}

function clear(){
    first = second = operation = undefined;
    display.value = '';
    enableManageButtons();
    display.removeAttribute('class');
}

function checkDisplayLength(){
    if(display.value.length > 19){
        display.setAttribute('class', 'wide');
    }else{
        display.removeAttribute('class');
    }
}

function backspace(){
   var x = display.value.trim();
   display.value = x.slice(0, x.length - 1);
   enableManageButtons();
}

function pushPoint(){
    display.value = display.value[display.value.length - 1] === '.' ?
        display.value : display.value + '.';
}
var display = get('display');
var first, second, operation;
var manageButtons = document.getElementsByClassName('manage');
var allButtons = document.getElementsByClassName('btn');

for(var i = 0; i < allButtons.length; i++){
    var x = allButtons[i].id;
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