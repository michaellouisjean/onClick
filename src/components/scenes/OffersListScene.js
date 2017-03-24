// import library
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
//import { Actions } from 'react-native-router-flux';

// create component & render
class OffersListScene extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>
          this is the OffersListScene !
        </Text>
      </View>
    );
  }
}

// make component avalaible to other parts
export default OffersListScene;
