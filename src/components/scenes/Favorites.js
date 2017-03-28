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

// create component & render
class OffersListScene extends React.Component {
  constructor(props) {
    super(props);
    this.user = Api.getUser();
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    //const user = Api.getUser();
    let request = '';
    if (this.user.status === 'candidate') {
      request = 'recruiters';
    } else {
      request = 'candidates';
    }
    console.log('USER =====> ', this.user);

    this.setState({ isLoaded: true });
  }

  renderFavorites(favorites) {
    return (
      favorites.map(function(favorite, index) {
        return (
          <Text key={index}>Favorite id : {favorite}</Text>
        );
      })
    );
  }

  render() {
    // if (!this.state.isLoaded) {
    //   console.log('loaded ', this.state.isLoaded);
    // }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {this.renderFavorites(this.user.favorites)}
      </View>
    );
  }
}

// make component avalaible to other parts
export default OffersListScene;
