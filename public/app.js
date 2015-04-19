
function createMap(mapEl, mapLat, mapLon) {
  var myOptions = {
    zoom: 12,
    center: new google.maps.LatLng(mapLat, mapLon)
  };
  var mapObject = new google.maps.Map(mapEl, myOptions);
  return mapObject;
}

// google maps calculate route function, modified from http://www.sitepoint.com/find-a-route-using-the-geolocation-and-the-google-maps-api/
function calculateRoute(from, to, mapEl) {
  var directionsService = new google.maps.DirectionsService();
  var directionsRequest = {
    origin: from,
    destination: to,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
  };
  directionsService.route(
    directionsRequest,
    function(response, status)
    {
      if (status == google.maps.DirectionsStatus.OK)
      {
        new google.maps.DirectionsRenderer({
          map: mapEl,
          directions: response
        });
      }
      else
        $("#error").append("Unable to retrieve your route<br />");
    }
  );
}