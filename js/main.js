var map;
var guitarcenter = {lat: 51.9172347, lng: 4.495705};
var marker;

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12, center: guitarcenter });
marker = new google.maps.Marker({position: guitarcenter, map: map});
}