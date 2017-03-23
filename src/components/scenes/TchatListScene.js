// import library
import React from 'react';
import {
  View,
  ListView,
  StyleSheet,
} from 'react-native';

// import components
import Conversation from '../commons/Conversation';

// styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 65,
  }
});

// create component & render
class TchatListScene extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
    };
  }

  render() {
    return (
      <View style={styles.container} >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={() => <Conversation />}
        />
      </View>
    );
  }
}

// make component avalaible to other parts
export default TchatListScene;

