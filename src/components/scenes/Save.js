// import library
import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
//import { Actions } from 'react-native-router-flux';
import Global from '../core/Global';
import Card from '../commons/Card';
import OfferCard from '../commons/OfferCard';
import Api from '../core/Api';

//console.log('#Favorites : user =>', this.user);
// create component & render
class OffersListScene extends React.Component {
  constructor(props) {
    super(props);
    // this.user = Api.getUser();

    this.state = {
      isLoaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }

  componentDidMount() {
    const user = Api.getUser();
    let request = '';
    if (user.status === 'candidate') {
      request = 'recruiters';
    } else {
      request = 'candidates';
    }
    console.log('USER =====> ', user.favorites);

        this.setState({
          isLoaded: true,
          dataSource: this.state.dataSource.cloneWithRows(user),
        });
  }

  renderCard(rowData) {
    const user = Api.getUser();
    console.log('renderCard ', user);
    if (user.status === 'candidate') {
      console.log('user is a candidate');
      return (<OfferCard {...rowData} />);
    }
    console.log('user is a recruiter');
    return (<Card {...rowData} />);
  }

  render() {
    //const USER = Api.getUser();
    //console.log('#Favorites: user => ', USER);
    if (!this.state.isLoaded) { 
      console.log('loaded ', this.state.isLoaded);
      return (null);
    }
    return (
      <View style={[Global.container, { paddingTop: 62, paddingBottom: 50 }]} >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderCard}
        />
      </View>
    );
  }
}

// make component avalaible to other parts
export default OffersListScene;
