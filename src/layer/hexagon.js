import {HexagonLayer} from '@deck.gl/aggregation-layers';

const getHexagonLayer = (id, data, radius, propertyName) => {
    return new HexagonLayer({
        id,
        data,
        pickable: true,
        extruded: true,
        radius: radius,
        coverage: .9,
        elevationScale: 10,
        colorDomain: [0, 100],
        elevationDomain: [0, 100],
        getColorWeight: point => point.properties[propertyName] || 0,
        colorAggregation: 'MEAN',
        getElevationWeight: point => point.properties[propertyName] || 0,
        elevationAggregation: 'MEAN',
        getPosition: d => d.geometry.coordinates
    });    
}


export default getHexagonLayer;