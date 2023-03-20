// This works:
// import './node_modules/leaflet/dist/leaflet.js';
// This doesn't:
import * as L from './node_modules/leaflet/dist/leaflet-src.esm.js';

// Uncomment if not lazy loading geoman
// import './node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js';

// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
	 	// Creating a tile layer usually involves setting the URL template for the tile images
	 	var osmUrl = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
	 	    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	 	    osm = L.tileLayer(osmUrl, {
	 	        maxZoom: 18,
	 	        attribution: osmAttrib
	 	    });

	 	// initialize the map on the "map" div with a given center and zoom
	 	var map = L.map('map').setView([19.04469, 72.9258], 12).addLayer(osm);

		var options = {
        position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
        drawMarker: true,  // adds button to draw markers
        drawPolygon: true,  // adds button to draw a polygon
        drawPolyline: true,  // adds button to draw a polyline
        drawCircle: true,  // adds button to draw a cricle
        editPolygon: true,  // adds button to toggle global edit mode
        deleteLayer: true   // adds a button to delete layers
    };

    await import('./node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js');
    L.PM.reInitLayer(map)

    // add leaflet.pm controls to the map
    map.pm.addControls(options);


    // get array of all available shapes
    map.pm.Draw.getShapes()

    // disable drawing mode
    map.pm.disableDraw('Polygon');

    // listen to when drawing mode gets enabled
    map.on('pm:drawstart', function(e) {
    	console.log(e)
    });

    // listen to when drawing mode gets disabled
    map.on('pm:drawend', function(e) {
    	console.log(e)
    });

// listen to when a new layer is created
map.on('pm:create', function(e) {
  console.log(e)

  // listen to changes on the new layer
  e.layer.on('pm:edit', function(x) {
    console.log('edit', x)
  });
});
