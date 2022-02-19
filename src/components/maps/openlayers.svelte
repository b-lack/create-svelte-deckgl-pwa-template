<script>
    export let geoJson;
    export let centerCoords;

    import { onMount } from 'svelte';

    import 'ol/ol.css';
    import Map from 'ol/Map';
    import {Tile, Vector as VectorLayer} from 'ol/layer';
    import {OSM, Vector as VectorSource} from 'ol/source';
    import View from 'ol/View';
    import { fromLonLat } from 'ol/proj';
    import GeoJSON from 'ol/format/GeoJSON';

    let view
    let mapElement
    let geoJsonLayer

    const setCenter = (center) => {
        if(!view) return

        view.setCenter(fromLonLat([center[0], center[1]]))
        view.setZoom(8)
    }
    const update = (geoJson) => {
        if(!view) return

        if(geoJson){
            geoJsonLayer.clear();
            const features = new GeoJSON({featureProjection: 'EPSG:3857'}).readFeatures(geoJson)
            geoJsonLayer.addFeatures(features);
        }
    }

    onMount(() => {
        view = new View();
        geoJsonLayer = new VectorSource();
        
        new Map({
            target: mapElement,
            view: view,
            layers: [
                new Tile({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: geoJsonLayer
                })
            ]
        });

        update(geoJson)
    })

    $: [
        update(geoJson),
        setCenter(centerCoords)
    ]

</script>


<div class="map" bind:this={mapElement}></div>
<slot></slot>

