
// Создайте приложение, в котором будет использоваться WebWorkers.
//     Задача приложения создать массив на 1 000 000 элементов со случайными значениями и отсортировать массив по возрастанию.

(function(){

    let btn = document.querySelector('button');
    btn.addEventListener('click', createWorker);
    let body = document.querySelector('body');

function createWorker() {  // эта функция создает рабочего и получает от него результат
                           // полученный результат функция выводит на страницу в виде параграфа
    let worker = new Worker('array.js');
    worker.onmessage = function (message) {
        let p = document.createElement('p');
        p.innerHTML = message.data;
        body.appendChild(p);
    };
}
})();