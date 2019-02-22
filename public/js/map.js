ymaps.ready(init);

const placemarks = [
  {
    latitude: 59.97,
    longitude: 30.31,
    hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
    balloonContent: [
      '<div class="map__balloon">',
      'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
      '</div>'
    ]
  },
  {
    latitude: 59.94,
    longitude: 30.25,
    hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
    balloonContent: [
      '<div class="map__balloon">',
      'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
      '</div>'
    ]
  },
  {
    latitude: 59.93,
    longitude: 30.34,
    hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
    balloonContent: [
      '<div class="map__balloon">',
      'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
      '</div>'
    ]
  }
];

const geoObjects = [];

function init() {
  var map = new ymaps.Map('map', {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  for (var i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark(
      [placemarks[i].latitude, placemarks[i].longitude],
      {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent.join('')
      },
      {
        iconLayout: 'default#image',
        iconImageHref: './public/data/svg/map-marker.svg',
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -40]
        
      });
  }

  var clusterer = new ymaps.Clusterer({});

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
}