
var map;
function initMap(){
  //map options

  var styledMapType = new google.maps.StyledMapType(
           [
             {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
             {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
             {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
             {
               featureType: 'administrative',
               elementType: 'geometry.stroke',
               stylers: [{color: '#c9b2a6'}]
             },
             {
               featureType: 'administrative.land_parcel',
               elementType: 'geometry.stroke',
               stylers: [{color: '#dcd2be'}]
             },
             {
               featureType: 'administrative.land_parcel',
               elementType: 'labels.text.fill',
               stylers: [{color: '#ae9e90'}]
             },
             {
               featureType: 'landscape.natural',
               elementType: 'geometry',
               stylers: [{color: '#dfd2ae'}]
             },
             {
               featureType: 'poi',
               elementType: 'geometry',
               stylers: [{color: '#dfd2ae'}]
             },
             {
               featureType: 'poi',
               elementType: 'labels.text.fill',
               stylers: [{color: '#93817c'}]
             },
             {
               featureType: 'poi.park',
               elementType: 'geometry.fill',
               stylers: [{color: '#a5b076'}]
             },
             {
               featureType: 'poi.park',
               elementType: 'labels.text.fill',
               stylers: [{color: '#447530'}]
             },
             {
               featureType: 'road',
               elementType: 'geometry',
               stylers: [{color: '#f5f1e6'}]
             },
             {
               featureType: 'road.arterial',
               elementType: 'geometry',
               stylers: [{color: '#fdfcf8'}]
             },
             {
               featureType: 'road.highway',
               elementType: 'geometry',
               stylers: [{color: '#f8c967'}]
             },
             {
               featureType: 'road.highway',
               elementType: 'geometry.stroke',
               stylers: [{color: '#e9bc62'}]
             },
             {
               featureType: 'road.highway.controlled_access',
               elementType: 'geometry',
               stylers: [{color: '#e98d58'}]
             },
             {
               featureType: 'road.highway.controlled_access',
               elementType: 'geometry.stroke',
               stylers: [{color: '#db8555'}]
             },
             {
               featureType: 'road.local',
               elementType: 'labels.text.fill',
               stylers: [{color: '#806b63'}]
             },
             {
               featureType: 'transit.line',
               elementType: 'geometry',
               stylers: [{color: '#dfd2ae'}]
             },
             {
               featureType: 'transit.line',
               elementType: 'labels.text.fill',
               stylers: [{color: '#8f7d77'}]
             },
             {
               featureType: 'transit.line',
               elementType: 'labels.text.stroke',
               stylers: [{color: '#ebe3cd'}]
             },
             {
               featureType: 'transit.station',
               elementType: 'geometry',
               stylers: [{color: '#dfd2ae'}]
             },
             {
               featureType: 'water',
               elementType: 'geometry.fill',
               stylers: [{color: '#b9d3c2'}]
             },
             {
               featureType: 'water',
               elementType: 'labels.text.fill',
               stylers: [{color: '#92998d'}]
             }
           ],
           {name: 'Styled Map'});


  const options= {
    center: {lat: 25.804211, lng: -80.201268},
    zoom: 17,
    gestureHandling: 'none',
    zoomControl: false,


  }




  //new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // // listen for click on map
  // google.maps.event.addListener(map, 'click', function(event){
  //     // add marker
  //     addMarker({coords:event.latLng});
  // });

  // // CODE TO TRY AND SET BOUNDARIES BUT NOT WORKING CORRECTLY.

  // // bounds of the desired area
  // var allowedBounds = new google.maps.LatLngBounds(
  //   new google.maps.LatLng(25.810940, -80.205704),
  //   new google.maps.LatLng(25.811071, -80.197473)
  //   // new google.maps.LatLng(25.802968, -80.197138),
  //   // new google.maps.LatLng(25.802712, -80.205568)
  // );
  // var lastValidCenter = map.getCenter();
  //
  // google.maps.event.addListener(map, 'center_changed', function() {
  //   if (allowedBounds.contains(map.getCenter())) {
  //     // still within valid bounds, so save the last valid position
  //     lastValidCenter = map.getCenter();
  //     return;
  //   }
  //
  //   // not valid anymore => return to last valid position
  //   map.panTo(lastValidCenter);
  // });



  blocks.forEach(function(block) {
    let blockShape = new google.maps.Polygon({
      paths: block.corners,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      map: map
    });

    let infoWindow = new google.maps.InfoWindow({
      content: block.content,
    });

    blockShape.addListener('mouseover', () => {
      // infoWindow.setPosition(block.center);
      // // open(map, anchor) doesn't work with polygons
      // infoWindow.open(map);
      //
      // $(".sidebar_menu").removeClass("hide_menu");
      // $(".toggle_menu").addClass("opacity_zero");
      // $(".toggle_menu").removeClass("opacity_one");
    });

    blockShape.addListener('mouseout', () => {
      infoWindow.close(map, blockShape);

      //
      // $(".sidebar_menu").addClass("hide_menu");
      // $(".toggle_menu").addClass("opacity_one");
      // $(".toggle_menu").removeClass("opacity_zero");

    });


    if (block.url) {
      blockShape.addListener('click', (event) => {
        // event.preventDefault();

        $(".sidebar_menu").removeClass("hide_menu");
        $(".toggle_menu").addClass("opacity_zero");
        $(".toggle_menu").removeClass("opacity_one");


        // $(".toggle_menu").removeClass("toggle_menu");

      });
    }
  });

  //sets the map theme
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}
