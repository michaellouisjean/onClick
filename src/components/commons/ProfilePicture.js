import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
//import { Actions } from 'react-native-router-flux';

export default class profilePicture extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => console.log('#ProfilePicture => image pressed')}
        //onPress={() => Actions.profile()}
      >
      <Image
        //source={require('../../assets/images/profile.jpeg')}
        source={{ uri: this.props.photo }}
        style={{
          borderWidth: this.props.border,
          borderColor: '#ffffff',
          height: this.props.size,
          width: this.props.size,
          borderRadius: this.props.size / 2,
        }}
      />
      </TouchableOpacity>
    );
  }
}
