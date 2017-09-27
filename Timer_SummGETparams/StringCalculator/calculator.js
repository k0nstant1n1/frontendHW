
window.onload = function(){
    var expression = document.getElementById('enter');
    var submit = document.getElementById('button');
    var p = document.getElementById('pp');
    submit.addEventListener('click',calculate);

    function extractValues(){
        return expression.value.split(' ');
    }

    function calculate(){
        var arr = extractValues();
        switch(arr[1]){
            case '+': p.innerHTML = 'result = ' + Number(plus(arr[0], arr[2])); break;
            case '-' : p.innerHTML = 'result = ' + Number(minus(arr[0], arr[2])); break;
            case '*' : p.innerHTML = 'result = ' + Number(multiple(arr[0], arr[2])); break;
            case '/' : p.innerHTML = 'result = ' + Number(divide(arr[0], arr[2])); break;
            default : p.innerHTML = 'invalid enter';
        }
    }

    function plus(a,b){
        return Number(a) + Number(b);
    }

    function minus(a,b){
        return a - b;
    }

    function multiple(a,b){
        return a * b;
    }

    function divide(a,b){
        return a / b;
    }
};
