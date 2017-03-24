// import library
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Api from '../core/Api';

// create component & render
class ProfileScene extends React.Component {

  onLogout() {
    console.log('logout');
    Api.logOut(() => console.log('utilisateur déconnecté'));
    Actions.login();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>
          this is the ProfileScene !
        </Text>
        <TouchableOpacity 
            onPress={this.onLogout}
        >
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// make component avalaible to other parts
export default ProfileScene;
