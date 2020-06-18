// Initialize and add the map
function initMap() {
    // Your location
    const loc = {lat: -34.397, lng: 150.644};
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}