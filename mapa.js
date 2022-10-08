function meDieronClick(){
    //alert("Dieron click en el boton");
    document.write("<h1>Saludo</h1>");
}


function darValor(){
    document.getElementById("nombres").value = "10";
}

function obtenerValor(){
    var dato = document.getElementById("nombres").value;
    alert(dato);
}

function validaNombre(){
    var dato = document.getElementById("nombres").value;

    if(dato == null || dato == ""){
        document.getElementById("apellidos").style.display = "none";
    }
    else{
        document.getElementById("apellidos").style.display = "inline";
    }
}


let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 2.284996, lng: -72.8042887 },
    zoom: 5,
  });
}
window.initMap = initMap;


function addMarcador(){
    const myLatLng = { lat: 3.3947116, lng: -76.6163143 };

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hola soy cali.",
    });
}

function trazarPoligono(){
    const flightPlanCoordinates = [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 },
    ];

    const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      flightPath.setMap(map);
}


var x = document.getElementById("demo");

function obtenerPosicion(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;

    const myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Aca estoy yo.",
    });
}