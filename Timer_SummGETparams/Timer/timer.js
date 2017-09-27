
(function(){
var display = document.getElementById("display");
var start = document.getElementById("start");
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');
display.value = '00:00:00:00';

start.onclick = startTimer;
stop.onclick = stopTimer;
clear.onclick = clearTimer;
var timeStart;
var sec = "00";
var minutes = "00";
var hour = "00";
var decisec = '00';

function startTimer(){
   if(timeStart === undefined){
   timeStart = setInterval(displayTime,100);
   }
}
function plusIteration(){
   decisec++;
   sec = Number(sec);
   minutes = Number(minutes);
   hour = Number(hour);
    if(decisec === 10){
        sec++;
        decisec = 0;
    }
    if(sec === 60){
        minutes++;
        sec = 0;
    }

    if(minutes === 60){
        hour++;
        minutes = 0;
    }

   if(decisec < 10 && decisec !== '00'){
       decisec = '0' + decisec;
   }
    if(sec < 10 && sec !== '00'){
        sec = '0'+ sec;
    }
    if(minutes < 10 && minutes !== '00'){
        minutes = '0' + minutes;
    }
    if(hour < 10 && hour !== '00'){
        hour = '0' + hour;
    }

    return hour + ':' + minutes + ':' + sec + ':' + decisec;
}

function stopTimer(){
clearInterval(timeStart);
timeStart = undefined;
}

function clearTimer(){
display.value = '00:00:00:00';
decisec = 0;
sec = 0;
minutes = 0;
hour = 0;
}

function displayTime(){
    display.value = plusIteration();
}

})();