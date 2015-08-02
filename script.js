(function(window, google, sbpi_g) {
  //map options
  var options = sbpi_g.MAP_OPTIONS,
   element = document.getElementById('map-canvas'),
  //map
  map = sbpi_g.create(element, options);
  
}(window, google, window.sbpi_g || (window.sbpi_g = {})));
