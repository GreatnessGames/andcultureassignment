import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div><div className='marker'></div><div className='marker-label'>{text}</div></div>;

const MapContainer = ({lat, lon, title}) => {
  console.log(lat, lon)
  const defaultProps = {
    center: {
      lat: Number(lat) || 41.289715,
      lng: Number(lon) || -86.627954
    },
    zoom: 10
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '225px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC-gLThImegYfkYayiuMya2vT0QgZCnSjA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      <AnyReactComponent
          lat= {Number(lat)}
          lng= {Number(lon)}
          text= {title}
        />
      </GoogleMapReact>
    </div>
  );
}
export default MapContainer;