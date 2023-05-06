      // Функция ymaps.ready() будет вызвана, когда 
      // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
      ymaps.ready(init);
      function init(){
          // Создание карты.
          var myMap = new ymaps.Map("map", {
              center: [53.908547, 27.548438], //«широта, долгота»
              zoom: 17 //от 0 (весь мир) до 19.
          });
          var myPlacemark = new ymaps.Placemark([53.908547, 27.548238], {
            hintContent: 'Vit-Tour',
            balloonContent: 'Вы можете найти нас в данном торговом центре'
          }, {
            iconLayout: 'default#image',
            iconImageHref: '/Travel/images/trvl.png',
            iconImageSize: [80, 100],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);
      }