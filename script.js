mapboxgl.accessToken = 'pk.eyJ1IjoibnN3YWdnIiwiYSI6ImNrdHE4cG55azB0ejEybm11N21samw5c3YifQ.164L6otfChZfmGbF2GMDoQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nswagg/ckvrb0ad69oal14tgom6mprft',
    //Starting points to center map
    center: [32.15, 39.0],
    zoom: 1.00
});

map.on('load', () => {
    map.addSource('tileset_data', {
        'url': 'nswagg.cku8smniz0a8o23pyxm93dmi0-4w436',
        'type': "vector"
    });
    // Add a layer showing the crash points.
    map.addLayer({
        'id': 'plane-crashes',
        'type': 'circle',
        'source': 'tileset_data',
        'source-layer': 'plane_data_full-8vfstn',
        'paint': {
            'circle-color': '#4264fb',
            'circle-radius': 6,
            'circle-stroke-width': 0,
            'circle-stroke-color': '#ffffff',
            'circle-opacity': 0
        }
    });

    // Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: true

        // TODO: scrollable stuff probably goes here
    });

    map.on('mouseenter', 'plane-crashes', (e) => {
        // Change the cursor style as a UI indicator.

        //TODO: Zoom stuffs
        //maybe map.zoom > threshold?
        //if zoom > threshold: return

        map.getCanvas().style.cursor = 'pointer';

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();

        let description = "";

        for (const property in e.features[0].properties) {
            description += "<p>" + property + ": " + e.features[0].properties[property] + "</p>";
        }

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    //not sure if we want this here. Not really user friendly?
    //maybe have if the point is clicked the box stays up until "x" is clicked
    map.on('mouseleave', 'plane-crashes', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });

});