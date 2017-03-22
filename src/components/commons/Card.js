// import library
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

// import component
import Global from '../core/Global';
import Tag from '../commons/Tag';

// create component & render
class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={Global.cardContainer}
        //onPress={() => console.log('#Card.js => go to profile')}
        onPress={() => Actions.profile()}
      >
        {/* LEFT Section*/}
        <View style={{ flex: 3 }} >
          <Image
            source={require('../../assets/images/profile.jpeg')}
            style={Global.cardImage}
          />

          <Text style={[{ color: Global.colors.secondary }, Global.cardPercent]} >
            85 %
          </Text>
        </View>

        {/* RIGHT Section*/}
        <View
          style={{
            flex: 4
          }}
        >

          {/* user infos */}
          <View style={{ marginBottom: 30 }} >
            <Text style={[{ color: Global.colors.primary }, Global.cardTitle]}>John Doe </Text>
            <Text style={{ color: Global.colors.primary, marginBottom: 30 }}>Developper Fullstack JS </Text>
            <Text style={{ color: Global.colors.primary }}>Offer title</Text>
          </View>

          {/* tags section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <Tag competence={'React'} />
            <Tag competence={'React-Native'} />
            <Tag competence={'Node JS'} />
          </View>

          {/* icons section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <TouchableOpacity onPress={() => console.log('#Card.js => favorites button')} >
              <Icon
                style={Global.icons}
                name={'ios-add-circle-outline'}
                color={'#9B9B9B'}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('#Card.js => invite button')} >
              <Icon
                style={Global.icons}
                name={'ios-hand-outline'}
                color={'#9B9B9B'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

// export component
export default Card;
