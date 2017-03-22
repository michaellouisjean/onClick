// import library
import React from 'react';
import {
  View,
  Text,
  Image,
  //Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import components
import Global from '../core/Global';

// styles
const styles = StyleSheet.create({
  section: {
    // width: '100%',
    // paddingVertical: 40,
    // paddingHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#999999',
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
    marginBottom: 30,
  },
  subSection: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  largeIcon: {
    fontSize: 32,
  }
});

//const FULLWIDTH = Dimensions.get('window').width;

// create component & render
class ProfileHeader extends React.Component {
  render() {
    return (
      <View>
        {/* profile header */}
        {/*<View style={{ height: 200, width: FULLWIDTH }}>*/}
          <Image
            source={require('../../assets/images/profile.jpeg')}
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
                source={require('../../assets/images/profile.jpeg')}
                style={styles.image}
              />
  
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >

                <TouchableOpacity
                  onPress={() => console.log('#ProfileHeader => star')}
                >
                  <Icon
                    style={[styles.largeIcon, { marginRight: 60 }]}
                    name={'ios-star-outline'}
                    color={Global.colors.primary}
                  />
                </TouchableOpacity>

                <Text style={[{ textAlign: 'center' }, styles.textName]}>John Doe</Text>

                <TouchableOpacity
                  onPress={() => console.log('#ProfileHeader => tchat')}
                >
                  <Icon
                    style={[styles.largeIcon, { marginLeft: 60 }]}
                    name={'ios-chatbubbles'}
                    color={Global.colors.primary}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '200',
                  color: '#4D6DC3',
                }}
              >Paris</Text>
            </View>
          </View>
        </View>

        <View style={[styles.section, styles.backgroundEven]}>
          <Text style={styles.titleSection} >Fullstack JS Developper</Text>

          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod optio,
                molestiae, quibusdam quae vel sit architecto maiores officia nostrum laborum?
                Tempore possimus ipsam quia voluptatem eius, nihil ullam voluptate!</Text>
        </View>

      </View>
    );
  }
}

// make component avalaible to other parts
export default ProfileHeader;
