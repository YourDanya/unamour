import {FC} from 'react'
import {TileLayer} from 'react-leaflet'
import {MapContainer} from 'react-leaflet'
import {Marker} from 'react-leaflet'
import {Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'
import useContactsMap from 'components/contacts/contacts-map/contacts-map.hook'
import {MapProps} from 'components/contacts/contacts-map/contacts-map.types'

let DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src
})

L.Marker.prototype.options.icon = DefaultIcon

const ContactsMap: FC<MapProps> = (props) => {
    const {transl} = useContactsMap()

    return (
        <>
            <MapContainer
                className={'contacts-map'}
                center={[50.4388, 30.5235]}
                zoom={17}
                scrollWheelZoom={true}
                zoomControl={false}
                boxZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.mapbox.com/styles/v1/danylt/cl0msozno000o16me9md1urdo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFueWx0IiwiYSI6ImNrc29icnllODFiMDgzMnBuYXN3NjU0dWcifQ.ZIp31u3mLyHo520yf0D-ag"
                />
                <Marker position={[50.4388, 30.5235]}>
                    <Popup>
                        {transl.location}
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default ContactsMap


// mapbox://styles/danylt/cl0msozno000o16me9md1urdo
// pk.eyJ1IjoiZGFueWx0IiwiYSI6ImNrc29icnllODFiMDgzMnBuYXN3NjU0dWcifQ.ZIp31u3mLyHo520yf0D-ag
// https://api.mapbox.com/styles/v1/danylt/cl0msozno000o16me9md1urdo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFueWx0IiwiYSI6ImNrc29icnllODFiMDgzMnBuYXN3NjU0dWcifQ.ZIp31u3mLyHo520yf0D-ag