

function workerTask() {
    let date = new Date();
    let arr = new Array(1000000);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 1000);
    }
    arr.sort(function(a, b){return a - b});
    let message = '';
    for(let i = 0; i < arr.length; i ++){
        message += ' ' + arr[i];
    }
    let datedif = new Date() - date;
    message += ' выполнено за ' + datedif + 'ms';
    postMessage(message);
}

workerTask();

