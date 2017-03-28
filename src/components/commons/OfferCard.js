// import library
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// import component
import Global from '../core/Global';
import Tag from '../commons/Tag';

// styles
const styles = StyleSheet.create({
  contractText: {
    fontWeight: '200',
    marginBottom: 10,
  }
});

// create component & render
class OfferCard extends React.Component {
  render() {
    const {
      photo,
      announces,
      society,
      city,
      description,
      firstname,
      lastname,
      loc,
      _id,
    } = this.props;
    //console.log('#OfferCard => ', this.props);

    return (
      <TouchableOpacity
        style={Global.cardContainer}
        onPress={() => Actions.viewOffer({
          photo,
          announces,
          society,
          city,
          description,
          firstname,
          lastname,
          loc,
          _id,
        })}
      >
        {/* LEFT Section*/}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            }}
        >
          <Image
            source={{ uri: photo }}
            style={Global.cardImage}
          />
        </View>

        {/* RIGHT Section*/}
        <View style={{ flex: 2 }} >

          <View style={{ marginBottom: 30 }} >
            <Text style={[{ color: Global.colors.primary }, Global.cardTitle]}>
              Looking for {this.props.announces[0].title}
            </Text>
            <Text style={{ color: Global.colors.primary, marginBottom: 30 }}>{society} </Text>
            <Text
              style={{ color: Global.colors.primary }}
              numberOfLines={2}
            >
              {announces[0].description}
            </Text>
          </View>

          <Text style={styles.contractText}>
            {announces[0].salary} € / month - Fulltime job
          </Text>

          {/* tags section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <Tag skills={announces[0]} />
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

// export component
export default OfferCard;
