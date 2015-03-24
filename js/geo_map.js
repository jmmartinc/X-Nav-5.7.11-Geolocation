function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var latlon = new google.maps.LatLng(latitude, longitude)
    var mapholder = document.getElementById('mapholder')
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions = {
        center:latlon,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

window.onload = function() {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        if(geo_position_js.init()){
            geo_position_js.getCurrentPosition(showPosition,showError);
        }else{
            alert("Functionality not available");
        }
    }
}
