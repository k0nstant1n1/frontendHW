
window.addEventListener('load', onloadfunk);
function onloadfunk(){
    var div = document.querySelector('div');
    div.style.left='200px';
    div.style.top='200px';

    function moveDown(px){
        var top = +div.style.top.slice(0,div.style.top.length - 2);
        div.style.top = top + px + 'px';
    }
    function moveTop(px){
        var top = +div.style.top.slice(0,div.style.top.length - 2);
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
    function movediv(event){
        switch(event.charCode){
            case 115: moveDown(10); break;
            case 97 : moveLeft(10); break;
            case 119: moveTop(10); break;
            case 100: moveRight(10); break;
        }
    }
    div.addEventListener('keypress', movediv);
}