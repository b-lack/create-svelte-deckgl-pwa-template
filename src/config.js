export default  {
    // Alternative: ./data/verbiss_2021.geojson
    DEFAULT_GEOJSON: './data/example-values.geojson'
};

const deckGlConfig = {
    // Alternative: verbissproz_ob_drittel
    GEOJSON_PROPERTY_NAME: 'value',
    GEOJSON_PROPERTY_NAME_READABLE: 'Verbissprozent',
    GEOJSON_PROPERTY_UNIT: '%',
    DEFAULT_HEXAGON_RADIUS: 500,
    TILE_SERVER: [
        'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ]
}

const persionalization = {
    LOGO_URL: 'https://raw.githubusercontent.com/b-lack/gruenecho/master/img/gruenecho_logo_white.svg',
    PAGE_URL: 'https://gruenecho.de/en'
}

export {deckGlConfig, persionalization};