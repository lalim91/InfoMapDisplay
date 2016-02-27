var marker;

function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(33.6694, -117.8231),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 33.6694, lng: -117.8231}
    });
}
google.maps.event.addDomListener(window, 'load', initialize);