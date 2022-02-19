<script>
    export let geoJson;
    export let centerCoords;

    import { onMount } from 'svelte';

    import 'leaflet/dist/leaflet.css';
    import L from 'leaflet/dist/leaflet';

    let map;
    let mapElement
    let geoJsonLayer


    const setCenter = (center) => {
        if(!map || !center) return

        map.setView([center[1], center[0]], 8);
    }
    const update = (geoJson) => {
        if(!geoJsonLayer || !geoJson) return

        geoJsonLayer.clearLayers();
        geoJsonLayer.addData(geoJson)
    }

    onMount(() => {
        map = L.map(mapElement);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        geoJsonLayer = L.geoJSON(null, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng);
            }
        }).addTo(map)

        update(geoJson),
        setCenter(centerCoords)
    })

    $: [
        update(geoJson),
        setCenter(centerCoords)
    ]
    

</script>


<div class="map" bind:this={mapElement}></div>
<slot></slot>

