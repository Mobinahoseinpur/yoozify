import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '700px',
    height: '300px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  


const Googlemap = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDJJg12q5cgmyGlFuTBdmA7go7uZP56J0w"
      })
    
      const [ map , setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback( map ) {
        setMap(null)
      }, [])
    
  return isLoaded ? (
    
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
        <></>
      </GoogleMap>
  ) : <></>
    
  
}


export default React.memo(Googlemap)

//api key
// AIzaSyDJJg12q5cgmyGlFuTBdmA7go7uZP56J0w






