// import library
import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import Global from '../core/Global';
// import Card from '../commons/Card';
// import OfferCard from '../commons/OfferCard';
import Api from '../core/Api';
import Config from '../core/Config';

const FAVORITES = [];
// create component & render
class OffersListScene extends React.Component {
  constructor(props) {
    super(props);
    this.user = Api.getUser();
    this.favoritesUser = [];
  }
  
  componentDidMount() {
    let request = '';
    if (this.user.status === 'candidate') {
      request = 'recruiters';
    } else {
      request = 'candidates';
    }
    console.log('USER =====> ', this.user);

    this.setState({ isLoaded: true });
    this.renderFavorites(this.user.favorites);
  }

  renderFavorites(favorites) {
    favorites.map((favorite) => fetch(`${Config.host}user/${favorite}`)
        .then(res => res.json())
        .then(result => {
          FAVORITES.push(result);
          console.log(FAVORITES);
          console.log('#Favorites.js : @fetch results =>', result);
        })
    );
  }
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Try to catch users</Text>
        {/*{this.renderFavorites(this.user.favorites)}*/}
      </View>
    );
  }
}

// make component avalaible to other parts
export default OffersListScene;
