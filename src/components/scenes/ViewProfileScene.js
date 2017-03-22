// import library & packages
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Map from '../containers/MapContainer';
//import { BlurView, VibrancyView } from 'react-native-blur';

// import component
import Global from '../core/Global';
import ProfileHeader from '../commons/ProfileHeader';


// create component & render
class ViewProfileScene extends React.Component {
  render() {
    return (
      <View style={Global.container}>
        <ScrollView>

          {/* profile header content */}
          <ProfileHeader />
          {/* END -- profile header content */}

          {/* section */}
          <View style={[Global.profileSection, Global.profileBackgroundColorWhite]}>
            <Text style={Global.profileTitleSection} >My best experience</Text>
            <Text style={Global.profileTextSubtitle} >Ubisoft Paris</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod optio,
              molestiae, quibusdam quae vel sit architecto maiores officia nostrum laborum?</Text>
          </View>

          {/* section */}
          <View style={[Global.profileSection, Global.profileBackgroundColorBlue]}>
            <Text style={Global.profileTitleSection} >My dergrees</Text>

            <View style={Global.profileSubSection}>
              <Text style={Global.profileTextSubtitle} >Motion Designer - 2016</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

            <View style={Global.profileSubSection}>
              <Text style={Global.profileTextSubtitle} >Motion Designer - 2016</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

          </View>

          {/* section */}
          <View style={[Global.profileSection, Global.profileBackgroundColorWhite]}>
            <Text style={Global.profileTitleSection} >My 3 greatest qualities</Text>

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

          {/* MAP */}
          <View style={[Global.profileSection, Global.profileBackgroundColorWhite]}>
            <Text style={Global.profileTitleSection} >We've meet here :</Text>
            <Map />
          </View>

        </ScrollView>
      </View>
    );
  }
}

// make component avalaible to other parts
export default ViewProfileScene;
