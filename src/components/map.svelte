<script>
    export let geoJson;

    import { onMount } from "svelte";
    import {deckGlConfig} from '../config'

    import {Deck} from '@deck.gl/core';
    import getTileLayer from '../layer/tile'
    import getHexagonLayer from '../layer/hexagon'

    import centerOfMass from '@turf/center-of-mass'

    let deckgl
    let mapElement
    let layers = [];

    const INITIAL_VIEW_STATE = {
        latitude: 51.163375, 
        longitude: 10.447683,
        zoom: 5,
        pitch: 60,
        bearing: 0
    }
    
    const setCenterFromGeoJson = (feature) => {
        if(!deckgl) return;

        const centerCoords = centerOfMass(feature);

        deckgl.setProps({
            initialViewState: {...INITIAL_VIEW_STATE, longitude: centerCoords.geometry.coordinates[0], latitude: centerCoords.geometry.coordinates[1], zoom: 8}
        })
    }

    const updateLayers = () => {
        if(!deckgl) return;
        
        layers = [];

        if(deckGlConfig.TILE_SERVER)
            layers.push(getTileLayer(deckGlConfig.TILE_SERVER))

        if(geoJson){
            setCenterFromGeoJson( geoJson );
            layers.push(getHexagonLayer('hex-layer', geoJson.features, deckGlConfig.DEFAULT_HEXAGON_RADIUS, deckGlConfig.GEOJSON_PROPERTY_NAME));
        }
            
           
        deckgl.setProps({layers: layers});
    }

    onMount(() => {

        deckgl = new Deck({
            parent: mapElement,
            initialViewState: INITIAL_VIEW_STATE,
            controller: {},
            layers: layers,
            getTooltip: ({object}) => {
                return object && object.elevationValue && {
                    className: 'sdg-tooltip',
                    html: `<div>
                                <span class="sdg-tooltip-title">${deckGlConfig.GEOJSON_PROPERTY_NAME_READABLE}</span><br/>
                                <span class="sdg-tooltip-value">${Math.round(object.elevationValue*10)/10} ${deckGlConfig.GEOJSON_PROPERTY_UNIT}</span>
                            </div>`
                }
            }
        });

        updateLayers();
    })

    $: updateLayers(geoJson)

</script>

<div class="map" bind:this={mapElement}></div>
    
<style>
    .map{
        height: 100vh;
        width: 100vw;
    }
    :global(.sdg-tooltip){
        text-align: center;
    }
    :global(.sdg-tooltip-value){
        font-size: 3em;
    }
</style>