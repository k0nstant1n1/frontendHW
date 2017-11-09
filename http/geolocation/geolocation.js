// создайте страницу с геолокацией


// геолокационные данные пользователя можно получить при помощи
// метода getCurrentPosition у объекта geolocation, который
// является свойством объекта navigator
// для получения данных напишем функцию, которая будет вызывать этот метод

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(currentCoord, showError);
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

function showError(error){
    if(error){
        let errorNode = document.createElement('h2');
        switch(error.code){
            case error.PERMISSION_DENIED:
                errorNode.innerHTML = 'User denied the request for Geolocation.';
                break;
            case error.POSITION_UNAVAILABLE:
                errorNode.innerHTML = 'Location information is unavialable.';
                break;
            case error.TIMEOUT:
                errorNode.innerHTML = 'The request to get user location timed out.';
                break;
            case error.UNKNOWN_ERR:
                errorNode.innerHTML = 'An unknown error occurred.';
                break;
        }
        let table = document.getElementsByTagName('table')[0];
        let body = document.getElementsByTagName('body')[0];
        body.insertBefore(errorNode, table);
    }
}
getLocation();