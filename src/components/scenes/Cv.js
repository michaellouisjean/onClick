// import library
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// create component & render
class Cv extends React.Component {
  render() {
    const {
      user,
    } = this.props;

    console.log('#Cv.js => ', user);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>
            This is the CV section
        </Text>
      </View>
    );
  }
}

// make component avalaible to other parts
export default Cv;
