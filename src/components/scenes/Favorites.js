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

//const FAVORITES = [];
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
    Api.getFavorites()
      .then(result => {
        console.log('#ComponentDidMount', result);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(result)
        });
      });
  }

  showFavorites() {
    if (this.state.dataSource.getRowCount() === 0) {
      console.log('user don\'t have any favorite');
      return (
        <View>
          <Text>Vous n'avez pas encore de favori !</Text>
          <TouchableOpacity onPress={() => Actions.homeFlow()}>
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
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCard}
      />
    );
  }


renderCard(rowData) {
  console.log('NOW RENDER CARDS !!!!!!!!!');
  if (this.user.status === 'candidate') {
    console.log('user is a candidate');
    return (<OfferCard {...rowData} />);
  }
  console.log('user is a recruiter');
  return (<Card {...rowData} />);
}

render() {
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
