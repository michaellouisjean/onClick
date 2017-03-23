// import library
import React from 'react';
import {
  View,
  ListView,
} from 'react-native';
import Api from '../core/Api';

// import component
//import Card from '../commons/Card';
import OfferCard from '../commons/OfferCard';
import Global from '../core/Global';
//import Config from '../core/Config';

const RECRUITERS = 'user/recruiters';

// create component & render
class HomeScene extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }

  componentDidMount() {
   Api.fetchFn(RECRUITERS)
     .then(results => {
       console.log(results);
       this.setState({
        dataSource: this.state.dataSource.cloneWithRows(results),
      });
     });
  }

  render() {
    return (
      <View style={[Global.container, { paddingTop: 62 }]} >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <OfferCard {...rowData} />}
        />
      </View>
    );
  }
}

// export component
export default HomeScene;
