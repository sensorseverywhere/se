$(function(){

    var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
        thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';

    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
         osmAttrib = '&copy; ' + osmLink + ' Contributors',
         landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
         thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink
         esriUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
         esriAttrib = '&copy; IGN';

    var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
         landMap = L.tileLayer(landUrl, {attribution: thunAttrib})
         esriMap = L.tileLayer(esriUrl, {attribution: esriAttrib});

    var map = L.map('mapContainer', {
		    layers: [esriMap] // only add one!
	  }).setView([-37.372804, 144.499871], 17);

    var drawnItems = new L.FeatureGroup();

    map.on('draw:created', function(e) {
      var type = e.layerType,
          layer = e.layer;

          map.addLayer(layer);
    });

    // Initialise the draw control and pass it the FeatureGroup of editable layers
    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        }
    });
    map.addControl(drawControl);


	 var baseLayers = {
	  	"OSM Mapnik": osmMap,
		  "Landscape": landMap,
      "Satellite": esriMap
	 };

   L.control.layers(baseLayers).addTo(map);


   function sensor_refresh() {
        var bbox = map.getBounds().toBBoxString();
        var url = window.location.href + 'sensor.json?bbox='+bbox;

     $.getJSON(url, function(data) {
        var sensorLayer = new L.GeoJSON();
        sensorLayer.addGeoJSON(data);
        map.addLayer(sensorLayer);
     });
   }

   map.on('moveend', sensor_refresh)
   sensor_refresh();


});
