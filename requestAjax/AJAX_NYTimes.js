//Сделать выгрузку контента c NY Times API, использую Ajax запросы.
// Информацию об NY Times API, и спецификацию запросов можно найти здесь: http://developer.nytimes.com/

(function(){

    // эта функция получает объект полученный из JSON и делает из него
    // div-элемент, содержащий картинку и ссылку на материал из New York Times
    function createStoryDiv(jsonResult) {
        // как показала практика - иногда в NYTimes бывают статьи без фотографий
        // поэтому, при помощи следующей проверки, мы их просто пропустим)
        if (jsonResult.multimedia[3] !== undefined) {
            let img = document.createElement('img');
            img.setAttribute('src', jsonResult.multimedia[3].url);
            let imgDiv = document.createElement('div');
            imgDiv.className = 'imgDiv';
            imgDiv.appendChild(img);

            let header = document.createElement('h3');
            header.innerHTML = jsonResult.title;

            let paragraph = document.createElement('p');
            paragraph.innerHTML = jsonResult.abstract;

            let link = document.createElement('a');
            link.setAttribute('href', jsonResult.url);
            link.appendChild(header);
            link.appendChild(paragraph);

            let linkDiv = document.createElement('div');
            linkDiv.className = 'linkDiv';
            linkDiv.appendChild(link);

            let contentDiv = document.createElement('article');
            contentDiv.appendChild(imgDiv);
            contentDiv.appendChild(linkDiv);

            contentDiv.className = 'contentDiv';
            return contentDiv;
        }
        return false;
    }

    //следующая функция получает массив обьектов, делает из них DOM элементы и возвращает блок этих элементов
    function createListOfStoryes(jsonResults){
        let content = document.createElement('div');
        for(let i = 0; i < jsonResults.length; i ++){
            let result = jsonResults[i];
            let child = createStoryDiv(result);
            if(child){
                content.appendChild(child);
            }
        }
        return content;
    }

    function sendRequest(){  //эта функция посылает ajax запрос и в случае успешного ответа - выводит на страницу результат при
                             // помощи createListOfStoryes, описанной выше
        let xhttp = new XMLHttpRequest();
        //в запросе url и api-key взяты с сайта http://developer.nytimes.com/
        xhttp.open('get','https://api.nytimes.com/svc/topstories/v2/home.json?api-key=29b19f7682264fac93e36468a3ae1119',true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(xhttp.readyState === 4 && xhttp.status === 200){
                let response = JSON.parse(xhttp.responseText);
                let results = response.results;
                let container = document.getElementsByClassName('NYTimesStories')[0];
                container.appendChild(createListOfStoryes(results))
            }
        };
    }

    // далее добавляем кнопке обработчик событий
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', sendRequest);

})();
