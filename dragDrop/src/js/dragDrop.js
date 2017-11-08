(function() {  // используем замыкание, чтобы избежать создания глобальных переменных

    let production = document.getElementsByClassName('product'); // коллекция товаров
    let cart = document.getElementsByClassName('cart')[0];       // корзина
    let transporter = document.createElement('div');             // элемент, в котором временно будет храниться копия товара

    function drag_start(ev) {           // чтобы товар не пропадал из магазина, во время события dragstart мы клонируем
        let node = this.cloneNode(true); //перетаскиваемый элемент и добавляем его к специально подготовленному transporter
        let img = node.firstElementChild;
        if(transporter.hasChildNodes()){
            transporter.removeChild(transporter.firstElementChild);
        }
        img.setAttribute('height', '100px');
        transporter.appendChild(node);
    }

    for (let i = 0; i < production.length; i++) {                // этот цикл навешивает обработчик событий
        production[i].addEventListener('dragstart', drag_start); // всем товарам в магазине
    }

    function drag_over(ev) {                            // без этого превент-дефолта товары не добавляются
        if (ev.preventDefault) ev.preventDefault();
    }

    function drop(ev) {                                 // эта функция выполняется во время события drop
        if (ev.preventDefault) ev.preventDefault();
        if (ev.stopPropagation) ev.stopPropagation();
        let elem = transporter.firstElementChild;       // на этом этапе мы берем наш скопированый нод из
        if (elem !== null) {                            // элемента transporter,
            elem.addEventListener('dblclick', deleteItem);  // добавляем ему слушатель, чтобы его можно было удалить
            this.appendChild(elem);                     // и прикрепляем его к корзине
        }
    }

    function deleteItem() {  // эта функция вызывается во время удаления элемента из корзины
        this.outerHTML = '';
        dropFrom.play();     // так как я теперь умею работать с тегом audio, то во время добавления и
    }                        // удаления элемента из корзины звучит соответствующий звук :)

    cart.addEventListener('dragover', drag_over);
    cart.addEventListener('drop', drop);

    let dropTo = document.getElementById('dropToCart');
    let dropFrom = document.getElementById('dropFromCart');

    cart.addEventListener('drop', function () {
        dropTo.play()
    });

}());