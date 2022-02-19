<script>
    import { onMount } from 'svelte';

    import Logo from './components/logo.svelte'
    import GitHub from './components/github.svelte'

    import Deckgl from './components/maps/deckgl.svelte'
    import Leaflet from './components/maps/leaflet.svelte';
    import OpenLayers from './components/maps/openlayers.svelte'

    import centerOfMass from '@turf/center-of-mass'

    import GJV from 'geojson-validation';

    import ENV from './config'

    let geoJson;
    let center;


    const mapFrameworks = {
        deckgl: Deckgl,
        leaflet: Leaflet,
        openlayers: OpenLayers
    }

    const loadGeoJson = (file) => {
        fetch(file)
            .then(response => response.json())
            .then(data => {
                
                if(GJV.valid(data)){
                    geoJson = data
                    center = centerOfMass(geoJson).geometry.coordinates;
                }else{
                    console.log(`geoJson "${file}" not valid`)
                }
            });
    }
    

    onMount(() => {
        loadGeoJson(ENV.DEFAULT_GEOJSON)
    })

</script>

<svelte:component this={mapFrameworks[ENV.FRAMEWORK]} geoJson={geoJson} centerCoords={center}></svelte:component>
<Logo/>
<GitHub/>