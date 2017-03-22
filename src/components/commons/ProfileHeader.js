// import library
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

// import components
import Global from '../core/Global';

// create component & render
class ProfileHeader extends React.Component {
  render() {
    return (
      <View>
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
                style={Global.profileImage}
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
        </View>

        <Text style={Global.profileTitleSection} >Fullstack JS Developper</Text>

        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod optio,
              molestiae, quibusdam quae vel sit architecto maiores officia nostrum laborum?
              Tempore possimus ipsam quia voluptatem eius, nihil ullam voluptate!</Text>

      </View>
    );
  }
}

// make component avalaible to other parts
export default ProfileHeader;
