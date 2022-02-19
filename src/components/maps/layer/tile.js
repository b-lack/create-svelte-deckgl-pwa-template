import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer} from '@deck.gl/layers';

const getTileLayer = (data) => {
    return new TileLayer({
        id: 'tile-layer',
        data,
        renderSubLayers: props => {
            const {
                bbox: {west, south, east, north}
            } = props.tile;
    
            return [
                new BitmapLayer(props, {
                    data: null,
                    image: props.data,
                    bounds: [west, south, east, north]
                })
            ];
        }
    })
}


export default getTileLayer;