// import library & packages
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
<<<<<<< Updated upstream
  InteractionManager,
=======
  TextInput,
>>>>>>> Stashed changes
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from 'react-native';

// import component
import Global from '../core/Global';
import Api from '../core/Api';

<<<<<<< Updated upstream
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
=======

const PADDING = 20;
const containerWidth = Dimensions.get('window').width - (PADDING * 2);
const inputWidth = Dimensions.get('window').width - (PADDING * 2) - (PADDING *2);

const styles = StyleSheet.create ({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'red',
    marginVertical: 200,
    width: containerWidth,
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 110,
  },
  h1: {
    marginTop: 50,
    marginBottom: 20,
    color: '#4D6DC3',
    fontWeight: 'bold',
    fontSize: 20,
  },
  h2: {
    color: '#4D6DC3',
    marginTop: 40,
    fontSize: 17,
  },
  inputsContainer: {
  },
  inputContainer: {
  }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >This is my CV</Text>
              <Text>This is my description</Text>
            </View>

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
=======
      <Image
        source={require('../../assets/images/bg-03.png')}
        style={styles.background}
        >
        {/*LOGOUT BUTTON*/}
        <TouchableOpacity onPress={() => this.onLogout()}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: '#4D6DC3',
                fontWeight: 'bold'
              }}
            >
              LogOut</Text>
            <Icon
              style={Global.icons}
              name={'ios-log-out'}
              color={Global.colors.primary}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.container} >
          <View style={styles.inputsContainer} >
            <View>
              <Text  style={styles.h1} >
                Email ID :
              </Text>
            </View>
            <View>
              <Text style={styles.h1}>
                City :
              </Text>
            </View>
            <View>
              <Text style={styles.h1}>
                Title :
                {/*Company :*/}
              </Text>
            </View>
          </View>
        </View>

      </Image>
>>>>>>> Stashed changes
    );
  }
}

// make component avalaible to other parts
export default ProfileScene;
