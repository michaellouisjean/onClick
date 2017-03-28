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

// create component & render
class OffersListScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }

  componentDidMount() {
    const user = Api.getUser();
    console.log('#HomeScene - componentDidMount => ', user);
    let request = '';

    if (user.status === 'candidate') {
      request = 'recruiters';
    } else {
      request = 'candidates';
    }
    

    //console.log(this.state.user.loc[0]);
    Api.fetchFn(`user/${request}?lng=${user.loc[0]}&lat=${user.loc[1]}`)
      .then(results => {
        console.log('#HomeScene : callbackResult =>', results);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(results),
        });
      });
  }

  renderCard(rowData) {
    const user = Api.getUser();
    if (user.status === 'candidate') {
      console.log('user is a candidate');
      return (<OfferCard {...rowData} />);
    }
    console.log('user is a recruiter');
    return (<Card {...rowData} />);
  }

  render() {
    const USER = Api.getUser();
    console.log(USER);
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
