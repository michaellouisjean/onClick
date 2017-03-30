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
  Slider,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

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
  titleSectionDisabled: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dbdbdb',
    fontStyle: 'italic',
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

//const user = Api.getUser();
//console.log('ProfileScene : User => ', user);

// create component & render
class ProfileScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      visibleOnMap: true,
      value: 200,
      numberOfLines: 3,
      user: Api.getUser(),
    };
    this.isActiveText = this.isActiveText.bind(this);
    this.setNumberOfLines = this.setNumberOfLines.bind(this);
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoaded: true,
      });
    });
  }

  onLogout() {
    console.log('logout');
    Api.logOut(() => {
      console.log('utilisateur déconnecté');
      Actions.login();
    });
    // Actions.login();
  }

  isActiveText() {
    return this.state.isLoaded ? styles.titleSection : styles.titleSectionDisabled;
  }

  activeMapText() {
    return this.state.visibleOnMap ? 'Géolocalisation activée' : 'Géolocalisation désactivée';
  }

  setNumberOfLines() {
    this.setState({
      numberOfLines: this.state.numberOfLines === 3 ? 0 : 3
    });
  }

  render() {
    const {
      visibleOnMap,
      user,
      value,
      numberOfLines
    } = this.state;

    console.log('#ProfileScene : user => ', user);
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          paddingBottom: 50,
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

                <View style={[styles.section, { alignItems: 'center', paddingTop: 15 }]}>
                  <TouchableOpacity onPress={() => this.onLogout()} >
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#E12773',
                        fontSize: 15,
                      }}
                    >Déconnexion</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >Email</Text>
              <Text>{user.email}</Text>
            </View>

            <TouchableOpacity onPress={() => Actions.cv({ user })}>
              <View style={[styles.section, styles.backgroundEven]}>
                <Text style={styles.titleSection} >Editer mon CV</Text>
              </View>
            </TouchableOpacity>

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >Ma description:</Text>
              <TouchableOpacity onPress={() => this.setNumberOfLines()}>
                <Text numberOfLines={numberOfLines}>{user.description}</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >Distance: {value} m</Text>
              <Slider
                disabled={!visibleOnMap}
                minimumValue={200}
                maximumValue={1000}
                step={50}
                onValueChange={(distance) => this.setState({ value: distance })}
              />
            </View>

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >
                {this.activeMapText()}
              </Text>
              <Switch
                value={visibleOnMap}
                onValueChange={() => this.setState({
                  visibleOnMap: !visibleOnMap
                })}
              />
            </View>


            <View style={[styles.section, { alignItems: 'center' }]}>
              <TouchableOpacity onPress={() => Alert.alert('Page de réglages')} >
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#777',
                    fontSize: 15,
                  }}
                >Réglages</Text>
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
