// создайте страницу с геолокацией


// геолокационные данные пользователя можно получить при помощи
// метода getCurrentPosition у объекта geolocation, который
// является свойством объекта navigator
// для получения данных напишем функцию, которая будет вызывать этот метод

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(currentCoord);
    }else{
        alert('navigator.geolocation does not support by this browser');
    }
}

function currentCoord(position){  // функция callback для метода getCurrentPosition
    let x = (id) => {return document.getElementById(id)};
    // далее функция записывает геолокационные данные в соответствующие элементы на странице
    x('latitude').innerHTML = position.coords.latitude;
    x('longitude').innerHTML = position.coords.longitude;
    x('accuracy').innerHTML = position.coords.accuracy;
    x('altitude').innerHTML = position.coords.altitude;
    x('altitudeAccuracy').innerHTML = position.coords.altitudeAccuracy;
    x('heading').innerHTML = position.coords.heading;
    x('speed').innerHTML = position.coords.speed;
}

getLocation();