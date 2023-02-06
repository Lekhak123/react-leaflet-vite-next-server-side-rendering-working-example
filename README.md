# react-leaflet-vite-next-server-side-rendering-working-example


```

import "./map.scss"
import React, {useState} from 'react';

function Page() {

    return (
        <div className="test">

            <Map/>
        </div>

    )
}

function Map() {
    const [Component,
        setComponent] = React.useState(() => Loading)
    const [loaded, setloaded] = useState(false)
    // useEffect() callbacks are only run in the browser, consequently the map
    // component is loaded and rendererd only in the browser.
    React.useEffect(() => {

        let loadMap = async() => {

            const leaflet = await import ('react-leaflet')
            await import("leaflet/dist/leaflet.css")
            
            setComponent(leaflet)
            console.log(leaflet);
            setloaded(true)
        }
        loadMap()

    }, [])
    const defaultPosition = [48.864716, 2.349];

    return (


        <React.Suspense fallback={< Loading />}>

        {loaded &&
        
            <Component.MapContainer center={defaultPosition} zoom={13}>
                <Component.TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <Component.Marker  position={defaultPosition}>
                    <Component.Popup>
                        123
                    </Component.Popup>
                </Component.Marker>

            </Component.MapContainer>
        
        }

        {!loaded && <Loading/>}

        </React.Suspense>
    )
}

function Loading() {
    return <div>Loading map...</div>
}

export {Page}

```
