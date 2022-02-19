<script>
    export let geoJson;
    export let centerCoords;

    import { onMount } from "svelte";
    import {deckGlConfig} from '../../config'

    import {Deck} from '@deck.gl/core';
    import getTileLayer from './layer/tile'
    import getHexagonLayer from './layer/hexagon'

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
    
    const setCenter = (center) => {
        if(!deckgl) return;

        deckgl.setProps({
            initialViewState: {...INITIAL_VIEW_STATE, longitude: center[0], latitude: center[1], zoom: 8}
        })
    }

    const update = (geoJson) => {
        if(!deckgl) return;
        
        layers = [];

        if(deckGlConfig.TILE_SERVER)
            layers.push(getTileLayer(deckGlConfig.TILE_SERVER))

        if(geoJson){
            layers.push(getHexagonLayer('hex-layer', geoJson.features, deckGlConfig.DEFAULT_HEXAGON_RADIUS, deckGlConfig.GEOJSON_PROPERTY_NAME));
        }
            
           
        deckgl.setProps({layers: layers});
    }

    onMount(() => {

        console.log('DECKGL');
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

        update();
    })

    $: [
        update(geoJson),
        setCenter(centerCoords)
    ]

</script>

<div class="map" bind:this={mapElement}></div>
<slot></slot>
    
<style>
    :global(.sdg-tooltip){
        text-align: center;
    }
    :global(.sdg-tooltip-value){
        font-size: 3em;
    }
</style>