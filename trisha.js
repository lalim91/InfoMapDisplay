//var marker;
//
//function initialize() {
//    var mapProp = {
//        center: new google.maps.LatLng(33.6694, -117.8231),
//        zoom: 7,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    };
//    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
//    marker = new google.maps.Marker({
//        map: map,
//        draggable: true,
//        animation: google.maps.Animation.DROP,
//        position: {lat: 33.6694, lng: -117.8231}
//    });
//}
//google.maps.event.addDomListener(window, 'load', initialize);


//can add lat/lng to this dynamically
var locations = [
    {lat: 33.6694, lng: -117.8231},
    {lat: 33.6928, lng: -118.0003},
    {lat: 33.7086, lng: -117.9564},
    {lat: 33.7408, lng: -117.8814}
];

var markers = [];
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 9,
        center: {lat: 33.6694, lng: -117.8231}
    });
}

function drop() {
    clearMarkers();
    for (var i = 0; i < locations.length; i++) {
        addMarkerWithTimeout(locations[i], i * 200);
    }
}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
        markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }, timeout);
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}
<<<<<<< HEAD

google.maps.event.addDomListener(window, 'load', initMap);
=======
$(document).ready(function(){
    getDataFromServer();
});
>>>>>>> ec2cb9d7f8f201e7806b58f7489e11ce237d38b7
