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
import { Actions } from 'react-native-router-flux';

// import component
import Global from '../core/Global';
import Tag from '../commons/Tag';

// styles
const styles = StyleSheet.create({
  largeIcon: {
    fontSize: 25,
  }
});

// create component & render
class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false,
      favorite: 'ios-star-outline',
    };
    this.onClickFavorite = this.onClickFavorite.bind(this);
    this.checkFavorite = this.checkFavorite.bind(this);
  }

  onClickFavorite() {
    this.state.isFavorite = !this.state.isFavorite;
    console.log(this.state.isFavorite);
    this.setState({
      favorite: this.checkFavorite(),
    });
  }

  checkFavorite() {
    return this.state.isFavorite ? 'ios-star' : 'ios-star-outline';
  }

  render() {
    console.log('#Card : props received => ', this.props);
    const {
      _id,
      firstname,
      lastname,
      city,
      photo,
      cv,
      description,
      loc,
      lastConnection,
    } = this.props;
    return (
      <TouchableOpacity
        style={Global.cardContainer}
        //onPress={() => console.log('#Card.js => go to profile')}
        onPress={() => Actions.profile({
          firstname,
          lastname,
          city,
          photo,
          cv,
          description,
          loc,
          lastConnection,
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
            //source={require('../../assets/images/profile.jpeg')}
            source={{ uri: photo }}
            style={Global.cardImage}
          />

          <Text style={[{ color: Global.colors.secondary }, Global.cardPercent]} >
            85 %
          </Text>
        </View>

        {/* RIGHT Section*/}
        <View style={{ flex: 2 }} >

          {/* user infos */}
          <View style={{ marginBottom: 30 }} >
            <Text style={[{ color: Global.colors.primary }, Global.cardTitle]}>{firstname}</Text>
            <Text style={{ color: Global.colors.primary, marginBottom: 30 }}>{cv.title}</Text>
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
            <Tag skills={cv} />
          </View>

          {/* icons section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

// export component
export default Card;
