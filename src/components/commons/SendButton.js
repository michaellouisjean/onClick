import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

export default class SendButton extends React.Component {
  render() {
    return (
      < TouchableOpacity onPress={() => this.props.action()} >
        <View
          style={{
            shadowOpacity: 0.1,
            shadowOffset: {
              width: 1,
              height: 3,
            },
            borderRadius: 20,
            marginTop: 15,
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 60,
          }}
        >
          <Text style={{ fontSize: 20, color: '#E12773' }} >
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
