
  function initMap() {
    var location = {lat: 48.47073, lng: 35.03548};
    
    // первая карта
    var map1 = new google.maps.Map(document.querySelectorAll('.map')[0], {
      zoom: 16,
      center: location
    });
    var marker1 = new google.maps.Marker({
      position: location,
      map: map1
    });
    
    // вторая карта
    var map2 = new google.maps.Map(document.querySelectorAll('.map')[1], {
      zoom: 16,
      center: location
    });
    var marker2 = new google.maps.Marker({
      position: location,
      map: map2
    });
  }


