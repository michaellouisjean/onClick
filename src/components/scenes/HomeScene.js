// import library
import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

// import component
import Card from '../commons/Card';
import Global from '../core/Global';

// create component & render
class HomeScene extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          marginTop: 62,
        }}
      >
        <View style={Global.container} >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    );
  }
}

// export component
export default HomeScene;
