import React from 'react';
import { Image, View } from 'react-native';
//import { Actions } from 'react-native-router-flux';

export default class DefaultAvatar extends React.Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}
