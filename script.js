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

// Uncomment to lazy load geoman
await import('./node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js');
L.PM.reInitLayer(map)

// add leaflet.pm controls to the map
map.pm.addControls();
