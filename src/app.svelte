<script>
    import Map from './components/map.svelte'
    import GJV from 'geojson-validation';

    import ENV from './config'

    let geoJSON;

    fetch(ENV.DEFAULT_GEOJSON)
        .then(response => response.json())
        .then(data => {
            if(GJV.valid(data))
                return geoJSON = data
            
            console.log(`geoJson "${ENV.DEFAULT_GEOJSON}" not valid`)
        });

</script>

<Map geoJson={geoJSON}/>

<style>
    :global(body){
        margin: 0;
    }
</style>