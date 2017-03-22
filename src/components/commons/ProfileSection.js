// import library
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

// import components
import Global from '../core/Global';

// create component & render
class ProfileSection extends React.Component {
  render() {
    return (
      <View style={[Global.profileSection, Global.profileBackgroundColorBlue]}>
        <Text>This is a section</Text>
      </View>
    );
  }
}

// make component avalaible to other parts
export default ProfileSection;
