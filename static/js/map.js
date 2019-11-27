var map = L.map('mapid')
    .setView([35.711977, -5.894070], 17);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
marker = new L.marker([35.711977, -5.894070]);
marker.addTo(map)
    .bindPopup('<a href="https://www.google.com/maps/place/Residence+LINA/@35.7111999,-5.8943358,17.87z/data=!4m5!3m4!1s0xd0b87ac05887d49:0xdb351f458b6721a!8m2!3d35.7120008!4d-5.8940685" target=\"_blank\">Ouvrir sur Google Map</a>')
    .openPopup();