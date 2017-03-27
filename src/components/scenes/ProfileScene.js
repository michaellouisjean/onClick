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

// import component
import Global from '../core/Global';

// styles
const styles = StyleSheet.create({
  section: {
    // width: '100%',
    // paddingVertical: 40,
    // paddingHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  sectionPadding: {

  },
  backgroundEven: {
    backgroundColor: Global.colors.backgroundEven,
  },
  backgroundOdd: {
    backgroundColor: Global.colors.backgroundOdd,
  },
  textTitle: {

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
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
});

// create component & render
class ProfileScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      visibleOnMap: true,
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
    } = this.state;

    console.log('#ProfileScene => ', this.props);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>

          {/* profile header content */}
          <View>
            {/* profile header */}
            <Image
              source={{ uri: 'https://images.pexels.com/photos/251829/pexels-photo-251829.jpeg?h=350&auto=compress&cs=tinysrgb' }}
              style={{
                height: 200,
              }}
              blurRadius={20}
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
                    marginTop: -50,
                  }}
                >
                  <Image
                    source={{ uri: 'https://images.pexels.com/photos/251829/pexels-photo-251829.jpeg?h=350&auto=compress&cs=tinysrgb' }}
                    style={styles.image}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={[{ textAlign: 'center' }, styles.textName]}>
                      Clarck Kent
                    </Text>
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '200',
                      color: '#4D6DC3',
                    }}
                  >Metropolis</Text>
                </View>
              </View>
            </View>

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >Email</Text>
              <Text>superman@j-league.com</Text>
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
    );
  }
}

// make component avalaible to other parts
export default ProfileScene;
