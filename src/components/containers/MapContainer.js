// import library & packages
import React from 'react';
import Map from 'react-native-maps';

// create component
class MapContainer extends React.Component {
  render() {
    return (
      <Map
      style={{
        width: '100%',
        height: 300,
      }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0120,
          longitudeDelta: 0.0120,
        }}
      >
        {/*<Map.Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />*/}
      </Map>
    );
  }
}

// make component avalaible to other parts
export default MapContainer;
