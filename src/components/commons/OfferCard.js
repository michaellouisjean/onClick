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
class OfferCard extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={Global.cardContainer}
        //onPress={() => console.log('#Card.js => go to profile')}
        onPress={() => Actions.viewOffer()}
      >
        {/* LEFT Section*/}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            }}
        >
          <Image
            source={require('../../assets/images/defaultBg.png')}
            style={Global.cardImage}
          />

        </View>

        {/* RIGHT Section*/}
        <View style={{ flex: 2 }} >

          {/* user infos */}
          <View style={{ marginBottom: 30 }} >
            <Text style={[{ color: Global.colors.primary }, Global.cardTitle]}>Offer title </Text>
            <Text style={{ color: Global.colors.primary, marginBottom: 30 }}>Company </Text>
            <Text
              style={{ color: Global.colors.primary }}
              numberOfLines={2}
            >Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod optio,
                molestiae, quibusdam quae vel sit architecto maiores officia nostrum laborum?</Text>
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
          
        </View>
      </TouchableOpacity>
    );
  }
}

// export component
export default OfferCard;
