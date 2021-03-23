function iniciarMap(){ 
    let coord = {lat:0.925611 ,lng: -79.659523};
    let map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
    });
    let marker = new google.maps.Marker({
    position: coord,
    map: map
    });
}

