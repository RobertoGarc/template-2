function iniciarMap(){ 
    var coord = {lat:0.925611 ,lng: -79.659523};
    var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
    });
    var marker = new google.maps.Marker({
    position: coord,
    map: map
    });
}