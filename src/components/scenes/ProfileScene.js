// import library
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
//import { Actions } from 'react-native-router-flux';

// create component & render
class ProfileScene extends React.Component {
  render() {
    return (
      <View>
        <Text>
          this is the ProfileScene !
        </Text>
      </View>
    );
  }
}

// make component avalaible to other parts
export default ProfileScene;
