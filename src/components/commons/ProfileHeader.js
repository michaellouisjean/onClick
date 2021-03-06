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

// import components
import Global from '../core/Global';
import Api from '../core/Api';

// styles
const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#999999',
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
    width: 150,
    height: 150,
    borderRadius: 75,
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
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false,
      favorite: 'ios-star-outline',
    };
    this.onClickFavorite = this.onClickFavorite.bind(this);
    this.checkFavorite = this.checkFavorite.bind(this);
    this.setIsFavorite = this.setIsFavorite.bind(this);
  }

  componentDidMount() {
    this.setIsFavorite();
  }

  setIsFavorite() {
    Api.isFavorite(this.props._id, (isFavorite) => {
      console.log('isFavorite ',isFavorite);
      this.setState({
        isFavorite,
        favorite: isFavorite ? 'ios-star' : 'ios-star-outline',
      });
    });
  }

  onClickFavorite() {
    Api.addToFavorite(Api.getUser()._id, this.props._id);
    this.setState({
      favorite: this.state.favorite==='ios-star-outline' ? 'ios-star' : 'ios-star-outline',
    });
  }

  checkFavorite() {
    return this.state.isFavorite ? 'ios-star' : 'ios-star-outline';
  }

  render() {
    return (
      <View>
        {/* profile header */}
        {/*<View style={{ height: 200, width: FULLWIDTH }}>*/}
          <Image
            source={{ uri: this.props.photo }}
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
                marginTop: -100,
              }}
            >
              <Image
                source={{ uri: this.props.photo }}
                style={styles.image}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >

                <TouchableOpacity
                  onPress={() => this.onClickFavorite()}
                >
                  <Icon
                    style={[styles.largeIcon, { marginRight: 60 }]}
                    name={this.state.favorite}
                    color={Global.colors.primary}
                  />
                </TouchableOpacity>

                <Text style={[{ textAlign: 'center' }, styles.textName]}>
                  {this.props.firstname}
                </Text>

                <TouchableOpacity
                  onPress={() => Actions.tchat({ speakerId: this.props._id })}
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
              >{this.props.city}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.section, styles.backgroundEven]}>
          <Text style={styles.titleSection} >{this.props.cv.title}</Text>

          <Text>{this.props.description}</Text>
        </View>

      </View>
    );
  }
}

// make component avalaible to other parts
export default ProfileHeader;
