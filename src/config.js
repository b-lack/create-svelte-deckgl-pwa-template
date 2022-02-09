export default  {
    DEFAULT_GEOJSON: './data/verbiss_2021.geojson',
    GEOJSON_PROPERTY_NAME: 'verbissproz_ob_drittel',
    DEFAULT_HEXAGON_RADIUS: 500,

};

const deckGlConfig = {
    GEOJSON_PROPERTY_NAME: 'verbissproz_ob_drittel',
    GEOJSON_PROPERTY_NAME_READABLE: 'Verbissprozent',
    GEOJSON_PROPERTY_UNIT: '%',
    DEFAULT_HEXAGON_RADIUS: 500,
    TILE_SERVER: [
        'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ]
}

export {deckGlConfig};