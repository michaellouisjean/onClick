// import library
import React from 'react';
import {
  View,
  Text,
  ListView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Global from '../core/Global';
import Card from '../commons/Card';
import OfferCard from '../commons/OfferCard';
import Api from '../core/Api';
import Config from '../core/Config';

const FAVORITES = [];
// create component & render
class OffersListScene extends React.Component {
  constructor(props) {
    super(props);
    this.user = Api.getUser();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
    this.renderCard = this.renderCard.bind(this);
  }

  componentDidMount() {
    this.renderFavorites(this.user.favorites);
  }

  showFavorites() {
    if (!this.user.favorites) {
      console.log('user don\'t have any favorite');
      return (
        <View>
          <Text>Vous n'avez pas encore de favori !</Text>
          <TouchableOpacity onPress={Actions.home()}>
            <Text
              style={{
                color: Global.colors.secondary,
                fontWeight: 'bold',
              }}
            >
              Retour au résultats
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      console.log('user have some favorites');
      if (FAVORITES.length < this.user.favorites.length) {
        console.log('Loading ...', FAVORITES);
        return (
            <ActivityIndicator
              animating={this.state.animating}
              style={{ height: 80 }}
              size="large"
            />
        );
      }
      return (
        // console.log('Favorites are loaded: We have to mount this =>', FAVORITES)
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderCard}
        />
      );
    }
  }

  renderCard(rowData) {
    console.log('NOW RENDER CARDS !!!!!!!!!');
    console.log('#Favorites : @renderCard() =>', this);
    if (this.user.status === 'candidate') {
      console.log('user is a candidate');
      return (<OfferCard {...rowData} />);
    }
    console.log('user is a recruiter');
    return (<Card {...rowData} />);
  }


  renderFavorites(favorites) {
    //const FAVORITES = [];
    favorites.map((favorite) => fetch(`${Config.host}user/${favorite}`)
      .then(res => res.json())
      .then(result => {
        FAVORITES.push(result);
        this.setState({
          //savedCard: FAVORITES
          dataSource: this.state.dataSource.cloneWithRows(FAVORITES),
        });
        console.log('#Favorites.js : setState =>', this.state.dataSource);
      })
    );
  }

  render() {
    console.log('#Favorites : @render()');
    console.log('#Favorites : @render() =>', this.user.status);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 64,
          paddingBottom: 50,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        {this.showFavorites()}
        </View>
      </View>
    );
  }
}

// make component avalaible to other parts
export default OffersListScene;
