// import library & packages
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  InteractionManager,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// import component
import Global from '../core/Global';
import Api from '../core/Api';

// styles
const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  backgroundEven: {
    backgroundColor: Global.colors.backgroundEven,
  },
  backgroundOdd: {
    backgroundColor: Global.colors.backgroundOdd,
  },
  textSubtitle: {
    fontSize: 16,
    color: '#4D6DC3',
    marginBottom: 10,
  },
  textName: {
    fontSize: 25,
    fontWeight: '200',
    color: '#4D6DC3',
  },
  titleSection: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D6DC3',
    marginBottom: 8,
  },
  subSection: {
    marginBottom: 0,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
});

const user = Api.getUser();
console.log('ProfileScene : User => ', user);

// create component & render
class ProfileScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      visibleOnMap: true,
      user: Api.getUser(),
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoaded: true,
      });
    });
  }

  render() {
    const {
      visibleOnMap,
      user,
    } = this.state;

    console.log('#ProfileScene : user => ', user);
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
        }}
      >
        <ScrollView>

          {/* profile header content */}
          <View>
            {/* profile header */}
            <Image
              source={{ uri: user.photo }}
              style={{
                height: 200,
              }}
              blurRadius={30}
            />
            {/*</View>*/}

            {/* profile header content */}
            <View style={styles.backgroundEven}>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    position: 'relative',
                    marginTop: -125,
                  }}
                >
                  <Image
                    source={{ uri: user.photo }}
                    style={styles.image}
                  />

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={[{ textAlign: 'center' }, styles.textName]}>
                      {user.firstname} {user.lastname}
                    </Text>
                  </View>

                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '200',
                      color: '#4D6DC3',
                    }}
                  >{user.city}</Text>
                </View>
              </View>
            </View>

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >Email</Text>
              <Text>{user.email}</Text>
            </View>

            <TouchableOpacity onPress={() => Actions.cv({ user })}>
              <View style={[styles.section, styles.backgroundEven]}>
                <Text style={styles.titleSection} >This is my CV</Text>
                <Text>This is my description</Text>
              </View>
            </TouchableOpacity>

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >Active map</Text>
              <Switch
                onValueChange={() => this.setState({
                  visibleOnMap: !visibleOnMap
                })}
                value={visibleOnMap}
              />
            </View>

            <View style={[styles.section, { alignItems: 'center' }]}>
              <TouchableOpacity
                onPress={() => Alert.alert('Account settings')}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#777',
                    fontSize: 15,
                  }}
                >Account setting</Text>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>
      </View>
    );
  }
}

// make component avalaible to other parts
export default ProfileScene;
