
(function(){
'use strict';

let btn = document.getElementsByTagName('button')[0];  // кнопка на которую будем вешать слушатель
let login = document.getElementById('login');          // поле для ввода логина
let psw = document.getElementById('password');         // поле для ввода пароля

let validate = (input) =>{             // эта функция возвращает false если введено что-то кроме букв и цифр
    let valid = /[^a-zA-Z0-9]/;        // паттерн для поиска всего, кроме буков и цифр
    return input.value.search(valid) === -1 && input.value !== ''? 'true' : 'false';
};

let formValidate = () =>{           // эта функция проверяет поля ввода логина и пароля
    if(validate(login) === 'true' && validate(psw) === 'true'){
        alert('login & password validation passed successfully!');
    }else{
        alert('login or password is entered wrong');
    }
};

btn.addEventListener('click', formValidate);
})();