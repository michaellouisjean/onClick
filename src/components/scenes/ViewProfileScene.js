// import library & packages
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
//import { BlurView, VibrancyView } from 'react-native-blur';

// import component
import Global from '../core/Global';


// create component & render
class ViewProfileScene extends React.Component {
  render() {
    return (
      <View style={Global.container}>
        <ScrollView>

          {/* profile header */}
          <View style={{ height: 200, width: '100%' }}>
            <Image source={require('../../assets/images/profile.jpeg')} />
          </View>

          {/* profile header content */}
          <View style={[Global.profileSection, Global.profileBackgroundWhite]}>
            <View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  position: 'relative',
                  top: -100,
                }}
              >
                <Image
                  source={require('../../assets/images/profile.jpeg')}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderWidth: 4,
                    borderColor: '#ffffff',
                  }}
                />
                <Text style={[{ textAlign: 'center' }, Global.profileTextName]}>John Doe</Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '200',
                    color: '#4D6DC3',
                  }}
                >Paris</Text>
              </View>
            </View>

            <Text
              style={Global.profileTitleSection}
            >Fullstack JS Developper</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod optio,
              molestiae, quibusdam quae vel sit architecto maiores officia nostrum laborum?
              Tempore possimus ipsam quia voluptatem eius, nihil ullam voluptate!</Text>
          </View>

          {/* section */}
          <View style={[Global.profileSection, Global.profileBackgroundColorBlue]}>
            <Text
              style={Global.profileTitleSection}
            >My best experience</Text>
            <Text style={Global.profileTextSubtitle} >Ubisoft Paris</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod optio,
              molestiae, quibusdam quae vel sit architecto maiores officia nostrum laborum?</Text>
          </View>

          {/* section */}
          <View style={[Global.profileSection, Global.profileBackgroundColorWhite]}>
            <Text
              style={Global.profileTitleSection}
            >My dergrees</Text>

            <View style={Global.profileSubSection}>
              <Text style={Global.profileTextSubtitle} >Motion Designer - 2016</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

            <View style={Global.profileSubSection}>
              <Text style={Global.profileTextSubtitle} >Motion Designer - 2016</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

          </View>

          <View style={[Global.profileSection, Global.profileBackgroundColorBlue]}>
            <Text
              style={Global.profileTitleSection}
            >My 3 greatest qualities</Text>
            <View style={Global.profileSubSection}>
              <Text style={Global.profileTextSubtitle} >Quality 1</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>
            
            <View style={Global.profileSubSection}>
              <Text style={Global.profileTextSubtitle} >Quality 2</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

            <View style={Global.profileSubSection}>
              <Text style={Global.profileTextSubtitle} >Quality 3</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

// make component avalaible to other parts
export default ViewProfileScene;
