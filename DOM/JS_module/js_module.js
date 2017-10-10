

function addListener(domElem, event, handler){

    /* domElem = елемент, на который необходимо установить обработчик событий
       event   = событие, на котором должна срабатывать функция обработчик
       handler = функция обработчик
     */

    if(domElem.addEventListener){
        domElem.addEventListener(event, handler);
    }else{
        domElem.attachEvent(event, handler);
    }
}

 var p = document.getElementsByTagName('p')[0];
 addListener(p,'click', changeColor);

function changeColor(){
    var colors = ['red','green','blue','yellow','black','grey'];
    this.style.color=colors[Math.floor(Math.random() * colors.length)];
}