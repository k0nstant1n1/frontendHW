
window.onload = function(){
function get(id){
    return document.getElementById(id);
}

function pushButton(){
    display.value += this.id[2];
}

function parseDisplay(){
    first = display.value === ''? 0: +display.value;
    operation = this.id[2];
    display.value += ' ' + operation + ' ';
    for(var i = 0; i < manageButtons.length; i++){
        manageButtons[i].setAttribute('disabled','disabled');
    }
}

function equaly(){
    if(display.value.length !== 0){
        second = +display.value.split(operation)[1];
        display.value += ' = ';
        switch(operation){
            case '+': display.value += first + second; break;
            case '-': display.value += first - second; break;
            case 'x': display.value += first * second; break;
            case '/': display.value += first / second; break;
        }
        for(var i = 0; i < buttons.length; i++){
            buttons[i].setAttribute('disabled','disabled');
        }
    }
}
function clear(){
    display.value = '';
for(var i = 0; i < buttons.length; i++){
    buttons[i].removeAttribute('disabled');
}
}
var manageButtons = document.getElementsByClassName('manage');
var buttons = document.getElementsByClassName('btn');
var first;
var operation;
var second;
var display = get('display');
get('id+').onclick = parseDisplay;
get('id-').onclick = parseDisplay;
get('idx').onclick = parseDisplay;
get('id/').onclick = parseDisplay;
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
