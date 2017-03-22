// import library & packages
import React from 'react';
import Map from 'react-native-maps';
import {
  View
} from 'react-native';



// create component
class MapContainer extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}
      >
        <Map
        style={{
          width: 329,
          height: 300,
        }}
          initialRegion={{
            latitude: 48.8564449,
            longitude: 2.4002913,
            latitudeDelta: 0.0120,
            longitudeDelta: 0.0120,
          }}
        >
          <Map.Marker
            coordinate={{
              latitude: 48.8564449,
              longitude: 2.4002913,
            }}
          />
        </Map>
      </View>
    );
  }
}

// make component avalaible to other parts
export default MapContainer;
