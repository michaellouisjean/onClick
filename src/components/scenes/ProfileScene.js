// import library
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Api from '../core/Api';
import Icon from 'react-native-vector-icons/Ionicons';
import Global from '../core/Global';

const PADDING = 20;
const containerWidth = Dimensions.get('window').width - (PADDING * 2);
const inputWidth = Dimensions.get('window').width - (PADDING * 2) - (PADDING *2);

const styles = StyleSheet.create ({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
  },
  container: {
    backgroundColor: '#FFF',
    marginVertical: 50,
    width: containerWidth,
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    height: 40,
    width: inputWidth,
    backgroundColor: 'white',
  }
});


// create component & render
class ProfileScene extends React.Component {

  onLogout() {
    console.log('logout');
    Api.logOut(() => console.log('utilisateur déconnecté'));
    Actions.login();
  }

  render() {
    return (
      <Image
        source={require('../../assets/images/bg-03.png')}
        style={styles.background}
        >
        <View>
        <TouchableOpacity onPress={() => this.onLogout()}>
          <View style={{
            flex: 1,
          }}>
          <Icon
            style={{ marginLeft: 60, fontSize: 20 }}
            name={'ios-log-out'}
            color={Global.colors.primary}
          />
          </View>
        </TouchableOpacity>
        </View>
      </Image>
    );
  }
}

// make component avalaible to other parts
export default ProfileScene;
