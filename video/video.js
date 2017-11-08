// Создайте страницу, разместите на ней видеоплеер 640х460,
// сделайте разметку согласно семантике HTML5, укажите несколько
// источников в source, видео должно проигрываться в IE
(function(){
let vid = document.getElementById('vid'); // достаем из DOM наш элемент видео
vid.width = 640;                            // и выставляем ему необходимые размеры
vid.height = 460;


// на ютубе какой-то добрый человек в комментах написал какой трек в какое время начинается
// этим не воспользоваться - просто грех)
// копируем содержимое коммента и заносим в строку
let str = '00:00 - Speak To Me\n' +
    '01:09 - Breathe\n' +
    '03:53 - On The Run\n' +
    '07:38 - Time\n' +
    '14:30 - The Great Gig in the Sky\n' +
    '19:08 - Money\n' +
    '25:34 - Us and Them\n' +
    '33:18 - Any Colour You Like\n' +
    '36:43 - Brain Damage/Eclipse';
// эти плюсики, что вверху, я не писал, - это оно так с ютуба взяло

// далее разобьём строку на массив строк
let stringsArr = str.split('\n');

// теперь надо из этого массива сделать два отдельных:
// один с названиями композиций, второй с таймпоинтами
let timePoints = [];
let tracks = [];
for(let i = 0; i < stringsArr.length; i++){
    timePoints[i] = stringsArr[i].split('-')[0].trim();
    tracks[i] = stringsArr[i].split('-')[1].trim();
}

let timeConverter = (str) =>{   // эта функция конвертирует время из формата "03:53" в секунды
    let arr = str.split(':');
    return parseInt(arr[0])*60 + parseInt(arr[1]);
};
 // пройдёмся по массиву timePoints методом map
// и в итоге получим новый массив, где значения уже в секундах
timePoints = timePoints.map(timeConverter);

let createButton = (value)=>{   // эта функция создает кнопки с названиями треков
    let btn = window.document.createElement('button');
    btn.innerHTML = value;
    btn.setAttribute('class', 'track');
    return btn;
};

let fragment = document.createElement('div');
// в строке выше мы создали фрагмент, к которому будем добавлять кнопки
for(let i = 0; i < tracks.length; i++){
    let btn = createButton(tracks[i]);
    btn.time = timePoints[i];  // тут мы эелементу button добавляем свойство time, чтоб он знал свое время
    btn.addEventListener('click', btnPlay);
    fragment.appendChild(btn);
}

let play = document.createElement('button');  // создаем кнопку play/pause
play.innerHTML = 'play/pause';
play.addEventListener('click', function(){
    if(vid.paused){                       // если видео на паузе - то оно запускается и наоборот
        vid.play();
    }else{
        vid.pause();
    }
});
fragment.insertBefore(play, fragment.firstChild);

let controls = document.getElementsByClassName('controls')[0];
controls.appendChild(fragment);

function btnPlay(){
    vid.currentTime = this.time;
    vid.play();
}
})();