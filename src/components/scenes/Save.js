// import library
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

// import components
import Api from '../core/Api';
import Global from '../core/Global';
import ProfilePicture from '../commons/ProfilePicture';

// rules for background image
const PADDING = 20;
const containerWidth = Dimensions.get('window').width - (PADDING * 2);
const inputWidth = Dimensions.get('window').width - (PADDING * 2) - (PADDING * 2);

// styles
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
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
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  section: {
    backgroundColor: 'transparent',
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#999999',
    fontSize: 18,
    marginBottom: 10,
  },
  sectionText: {
    color: '#555',
    fontSize: 15,
    fontWeight: 'bold',
  },
  settings: {
    color: '#888',
    fontWeight: '500',
    fontSize: 14,
    top: 20,
  },
});

// create component & render
class ProfileScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleOnMap: true,
    };
  }

  onLogout() {
    console.log('logout');
    Api.logOut(() => console.log('utilisateur déconnecté'));
    Actions.login();
  }

  render() {
    const user = Api.getUser();
    console.log('ProfileScene =>', user);

    const {
      visibleOnMap,
    } = this.state;

    return (
      <View>

        <Image
          source={require('../../assets/images/bg04.png')}
          style={styles.background}
        >
          <View style={{ flex: 1, paddingHorizontal: 20 }} >

            {/* --------------------------------------------- LOGOUT BUTTON */}
            <TouchableOpacity
              onPress={() => this.onLogout()}
              style={{
                flexDirection: 'row',
                backgroundColor: 'transparent',
                justifyContent: 'flex-end',
              }}
            >
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 16,
                }}
              >
                Log out
              </Text>

              <Icon
                style={{ marginLeft: 20, fontSize: 20 }}
                name={'ios-power'}
                color={Global.colors.backgroundEven}
              />
            </TouchableOpacity>

            {/* --------------------------------------------- HEADER */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 70,
              }}
            >
              <ProfilePicture
                photo={user.photo}
                size={90}
                border={2}
                style={{ flex: 1 }}
              />

              <Text style={[styles.username, { flex: 3, paddingLeft: 20 }]} >
                {user.firstname} {user.lastname}
              </Text>
            </View>

            {/* --------------------------------------------- INFOS */}
            <View style={styles.part}>
              {/* EMAIL */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Email:</Text>
                <Text style={styles.sectionText}>{user.email}</Text>
              </View>

              {/* CITY */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>City:</Text>
                <Text style={styles.sectionText}>{user.city}</Text>
              </View>

              {/* TITLE OR SOCIETY */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {user.status === 'candidate' ? 'Title:' : 'Company:'}
                </Text>
                <Text style={styles.sectionText}>
                  {user.status === 'candidate' ? user.cv.title : user.society}
                </Text>
              </View>

              {/* SWITCH BUTTON */}
              <View>
                <Text style={styles.sectionTitle}>Visible on map</Text>
                <Switch
                  onValueChange={() => this.setState({
                    visibleOnMap: !visibleOnMap
                  })}
                  value={visibleOnMap}
                />
              </View>
            </View>

            {/* --------------------------------------------- SETTINGS BUTTON */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => Alert.alert('Account Settings')} >
                <Text style={styles.settings} >Account settings</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </Image>

      </View>
    );
  }
}

// make component avalaible to other parts
export default ProfileScene;
