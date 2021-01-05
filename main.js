require(["esri/Map", "esri/views/MapView"], function (
    Map,
    MapView
  ) {
    /******************************************************************
     *
     * Set the initial map and zoom/center example
     *
     ******************************************************************/
  
    // Create a basemap and set properties in map constructor. Try changing to various basemaps
    // streets, satellite, hybrid, topo, gray, dark-gray, oceans, national-geographic, terrain
    // osm, dark-gray-vector, gray-vector, streets-vector, topo-vector, streets-night-vector
    // streets-relief-vector, streets-navigation-vector
  
    const map = new Map({
      basemap: "streets"
    });
  
    view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 15,
      center: [ 8.404464653074793, 49.013788043111425] // longitude, latitude
    });
  });