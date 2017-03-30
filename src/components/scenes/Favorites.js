// import library
import React from 'react';
import {
  ActivityIndicator,
  ListView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
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
  static title = '<RefreshControl>';
  static description = 'Adds pull-to-refresh support to a scrollview.';
  constructor(props) {
    super(props);
    this.user = Api.getUser();
    this.state = {
      isRefreshing: false,
      loaded: 0,
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

  _onRefresh = () => {
    console.log('#REFRESH : _onRefresh');
    this.setState({ isRefreshing: true });
    Api.getFavorites()
      .then(result => {
        console.log('#REFRESH : ComponentDidMount =====>>>>>', result);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(result)
        });
      });
    setTimeout(() => {
      console.log('#REFRESH : setTimeout()');
      // prepend 10 items
      const rowData = Array.from(new Array(10))
        .map((val, i) => ({
          text: `Loaded row ${+this.state.loaded + i}`,
          clicks: 0,
        }))
        .concat(this.state.rowData);
        console.log('REFRESH : isLoaded =====>>>>>', this.state.loaded);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData,
      });
    }, 200);
  };

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
        style={{ paddingHorizontal: 8 }}
        dataSource={this.state.dataSource}
        renderRow={this.renderCard}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor={Global.colors.primary}
            title="Loading..."
            titleColor={Global.colors.secondary}
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
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
