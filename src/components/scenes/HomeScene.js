// import library
import React from 'react';
import {
  View,
  ListView,
} from 'react-native';
import Api from '../core/Api';

// import component
import Card from '../commons/Card';
import OfferCard from '../commons/OfferCard';
import Global from '../core/Global';
//import Config from '../core/Config';

const RECRUITERS = 'user/recruiters?lng=user.loc[0]&lat=user.loc[1]';
//const CANDIDATES = `user/candidates?lng=${this.state.user.loc[0]}&lat=${this.state.user.loc[1]}`;

// create component & render
class HomeScene extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      user: Api.getUser(),
    };
  }

  componentDidMount() {
   Api.fetchFn(`user/recruiters?lng=${this.state.user.loc[0]}&lat=${this.state.user.loc[1]}`)
     .then(results => {
       console.log(results);
       this.setState({
        dataSource: this.state.dataSource.cloneWithRows(results),
      });
     });
  }

  render() {
    //console.log('#HomeScene => User ', this.props.user);
    //console.log('HomeScene User =>', this.state.user);
    //console.log('#HomeScene');
    return (
      <View style={[Global.container, { paddingTop: 62 }]} >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <OfferCard {...rowData} />}
          //renderRow={(rowData) => <Card {...rowData} />}
        />
      </View>
    );
  }
}

// export component
export default HomeScene;
