// import library & packages
import React from 'react';
import Map from 'react-native-maps';
import {
  View
} from 'react-native';
import Api from '../core/Api';

// create component
class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    Api.fetchFn('user/track')
    .then((res) => {
      this.setState({ users: res });
    });
  }
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
          width: 350,
          height: 350,
        }}
          initialRegion={{
            latitude: 48.8559811961,
            longitude: 2.3482931256,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
          }}
        >
        <Map.Marker
          pinColor='blue'
          coordinate={{
            latitude: 48.851444,
            longitude: 2.345914,
          }}
        />

        {this.state.users.map((item, index) => {
          return (
            <Map.Marker
              key={index}
              coordinate={{
                latitude: item.loc[1],
                longitude: item.loc[0],
              }}
            />
          );
        })}
        </Map>
      </View>
    );
  }
}

// make component avalaible to other parts
export default MapContainer;
