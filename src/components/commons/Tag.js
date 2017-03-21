// import library
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

// import component
import Global from '../core/Global';

// create component & render
class Tag extends React.Component {
  render() {
    return (
      <View style={Global.cardTagContainer}>
        <Text style={Global.cardTags}>{this.props.competence}</Text>
      </View>
    );
  }
}

// export component
export default Tag;

