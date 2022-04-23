import Map, {Layer, LayerProps, Source, ViewState} from "react-map-gl"
import React, {Suspense, useEffect, useState} from "react"
import {Feature, FeatureCollection, GeoJsonProperties, Geometry} from "geojson"

type mapProps = {
    classes?: string[]
}

const MapComponent: React.FC<mapProps> = () => {
    let [viewport, setViewport] = useState<ViewState | Object>({
        latitude: 43.8975,
        longitude: -78.9429,
        zoom: 10,
    })

    const geojson: string | Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties> | undefined = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry:
                    {
                        type: 'Point',
                        coordinates: [-78.9429, 43.8975]
                    },
                properties: {}
            }
        ]
    }

    const layerStyle: LayerProps = {
        id: 'point',
        type: 'circle',
        paint: {
            'circle-radius': 5,
            'circle-color': 'red'
        }
    }

    const [renderMap, setRenderMap] = useState(true)

    useEffect(() => {
        // setTimeout(() => {
        //     setRenderMap(true)
        // }, 400)
    }, [])

    return (
        <div className={'map'}>
            {
                renderMap && (
                    <Map
                        mapStyle={'mapbox://styles/danylt/cl0msozno000o16me9md1urdo'}
                        mapboxAccessToken={'pk.eyJ1IjoiZGFueWx0IiwiYSI6ImNrc29icnllODFiMDgzMnBuYXN3NjU0dWcifQ.ZIp31u3mLyHo520yf0D-ag'}
                        {...viewport}
                        style={{width: '100%', height: '100%'}}
                        onMove={evt => setViewport(evt.viewState)}
                        onLoad={() => console.log('map loaded')}
                    >
                        <Source id="my-data" type="geojson" data={geojson}>
                            <Layer {...layerStyle} />
                        </Source>
                    </Map>
                )
            }
        </div>
    )
}

export default MapComponent