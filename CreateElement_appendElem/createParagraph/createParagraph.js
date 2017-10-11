
(function(){           // самовызывающаяся функция-обертка позволяет избежать создания глобальных переменных
var div = document.getElementsByClassName('container')[0];
var btn = document.getElementsByTagName('button')[0];
var paragraphs = document.getElementsByClassName('dinamic_created');
var i = 0;            // i = переменная-счетчик
var texts = [         // массив из будущих параграфоф
    'concat() - Joins two or more arrays, and returns a copy of the joined arrays',
    'fill()   - Fill the elements in an array with a static value',
    'filter() - Creates a new array with every element in an array that pass a test',
    'forEach() - Calls a function for each array element',
    'join()   - Joins all elements of an array into a string',
    'map()    - Creates a new array with the result of calling a function for each array element',
    'pop()    - Removes the last element of an array, and returns that element',
    'push()   - Adds new elements to the end of an array, and returns the new length',
    'slice()  - Selects a part of an array, and returns the new array',
    'splice() - Adds/Removes elements from an array'
];
function createParagraph(){
    var x = document.createElement('p');
    x.className = 'dinamic_created';
    div.appendChild(x);
    x.innerHTML = texts[i]; i++;
    // если бы переменная paragraphs была бы массивом, то вместо следующего цикла можно было бы
    // просто написать paragraphs.length = 0;, но так как это живая коллекция - на ней можно только
    // прочитать свойство length, но не перезаписать
    if(paragraphs.length === 10){
        for(var j = 0; j < 10; j ++){
            div.removeChild(paragraphs[0]); i = 0;
        }
    }
}

btn.addEventListener('click', createParagraph);

})();
