# Svelte Deckgl PWA Template

Template for creating svelte based geospatial progressive web apps.

## Installation

Download, install dependencies and run application:

```bash
npx create-svelte-deckgl-pwa-template my-deckgl-web-gis
```

## Run/Rerun

```bash
npm run dev
```

## Config

Change the behavior of the application in `src/config.js` or directly in the source code `src/**`.

### default

- `DEFAULT_GEOJSON`: Location to the default displayed geoJson (Points) Example File `docs/data/verbiss_2021.geojson`

### deckGlConfig

- `GEOJSON_PROPERTY_NAME`: Name of the geojson property to be displayed.
- `GEOJSON_PROPERTY_NAME_READABLE`: Readable name of the property shown in the tooltip.
- `GEOJSON_PROPERTY_UNIT`: Unit of the property shown in the tooltip.
- `DEFAULT_HEXAGON_RADIUS`: Radius of the aggregating hexagons shown on the map.
- `TILE_SERVER`: The tile server to be used as a basemap.