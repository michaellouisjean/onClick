// import library
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
//import { Actions } from 'react-native-router-flux';
import Api from '../core/Api';

// create component & render
class OffersListScene extends React.Component {
  render() {
    const USER = Api.getUser();
    console.log(USER);
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
