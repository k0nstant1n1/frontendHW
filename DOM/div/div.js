
window.addEventListener('load', onloadfunk);
function onloadfunk(){
    var divBlue = document.getElementsByTagName('div')[0];
    divBlue.style.backgroundColor='blue';
    divBlue.style.left='200px';
    divBlue.style.top='200px';
    divBlue.addEventListener('click', setBehaviorToDiv);

    var divGreen = document.getElementsByTagName('div')[1];
    divGreen.style.backgroundColor='green';
    divGreen.style.left='200px';
    divGreen.style.top='200px';
    divGreen.addEventListener('click', setBehaviorToDiv);

    var divRed = document.getElementsByTagName('div')[2];
    divRed.style.backgroundColor='red';
    divRed.style.left='200px';
    divRed.style.top='200px';
    divRed.addEventListener('click', setBehaviorToDiv);

    var divYellow = document.getElementsByTagName('div')[3];
    divYellow.style.backgroundColor='yellow';
    divYellow.style.left='200px';
    divYellow.style.top='200px';
    divYellow.addEventListener('click', setBehaviorToDiv);

    function setBehaviorToDiv(){
        var div = this;
        div.addEventListener('keydown',moveDiv);
        function moveDown(px){
            var top = +div.style.top.slice(0, div.style.top.length - 2);
            div.style.top = top + px + 'px';
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
        function moveDiv(event){
            switch(event.keyCode){
                case 37 : moveLeft(10); break;
                case 38 : moveTop(10); break;
                case 39 : moveRight(10); break;
                case 40 : moveDown(10); break;
            }
        }
    }
}