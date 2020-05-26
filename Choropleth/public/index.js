'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    // startMap();
    fetch('https://leafletjs.com/examples/choropleth/us-states.js')
      // .then(res => res.json())
      .then(console.log)
      .catch(console.error);

    // L.geoJson(statesData, {style: style}).addTo(map);
  }

  function startMap() {
    let mapboxAccessToken = 'pk.eyJ1IjoiZXN0ZWZhbjA3NCIsImEiOiJjanozbm83OXUwNHRqM25tcm84MHYxd3cyIn0.MSuA8qUuoo1A2aWOcXI5ng';
    let map = L.map('map').setView([37.8, -96], 4);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
      id: 'mapbox/light-v9'
    }).addTo(map);

    L.geoJson(statesData).addTo(map);

  }

  function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

})();