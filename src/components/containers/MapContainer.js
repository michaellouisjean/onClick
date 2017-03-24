// import library & packages
import React from 'react';
import Map from 'react-native-maps';
import {
  View
} from 'react-native';

// create component
class MapContainer extends React.Component {
  render() {
    // const {
    //   lng,
    //   lat,
    // } = this.props.location;
    console.log('#MapContainer => ', this.props.location);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          paddingBottom: 40,
        }}
      >
        <Map
          style={{
            width: 329,
            height: 300,
          }}
          initialRegion={{
            latitude: this.props.loc[1],
            longitude: this.props.loc[0],
            latitudeDelta: 0.0120,
            longitudeDelta: 0.0120,
          }}
        >
          <Map.Marker
            coordinate={{
              latitude: this.props.loc[1],
              longitude: this.props.loc[0],
            }}
          />
        </Map>
      </View>
    );
  }
}

// make component avalaible to other parts
export default MapContainer;
