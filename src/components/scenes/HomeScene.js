// import library
import React from 'react';
import {
  View,
  ListView,
} from 'react-native';

// import component
import Card from '../commons/Card';
//import OfferCard from '../commons/OfferCard';
import Global from '../core/Global';

// create component & render
class HomeScene extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([1, 1, 1, 1, 1]),
    };
  }
  render() {
    return (
      <View style={[Global.container, { paddingTop: 62 }]} >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={() => <Card />}
        />
      </View>
    );
  }
}

// export component
export default HomeScene;
