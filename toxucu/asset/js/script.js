function Active() {

    let take = document.getElementById("shop");
    if (take.style.display == "none") {
        take.style.display = "block";
    } else {
        take.style.display = "none";
    }
}


let str='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nesciunt sequi soluta repudiandae temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nesciunt sequi soluta repudiandae temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nesciunt sequi soluta repudiandae temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nesciunt sequi soluta repudiandae temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nesciunt sequi soluta repudiandae temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nesciunt sequi soluta repudiandae temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nesciunt sequi soluta repudiandae temporibus. '  
let x=str.substr(0,350);
document.getElementById("show").innerHTML=x;
function Reverse(){


let btn=document.getElementById("btn");

if(btn.textContent=="Less"){
btn.textContent="Read More"
document.getElementById("show").innerHTML=x
}
else{
btn.textContent="Less"
document.getElementById("show").innerHTML=str;
}

}
$(document).ready(function() {
    var myCenter = new google.maps.LatLng(51.508530, -0.076132);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 8,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("contact_map"), mapProp);
        var icon = {
            url: 'images/icon/map_pin.png'
        };
        var marker = new google.maps.Marker({
            position: myCenter,
            map: map,
            title: 'Template Bundle',
            icon: icon
        });
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content: "<span> Template Bundle </span>"
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});