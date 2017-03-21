// import library
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

// create component & render
class LoginContainer extends React.Component {
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
          Hello an welcome on onClick !
        </Text>
      </View>
    );
  }
}

// export component
export default LoginContainer;
