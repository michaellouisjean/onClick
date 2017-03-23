// import library
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// import component
import ProfilePicture from './ProfilePicture';
import Global from '../core/Global';

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Global.colors.primary,
    marginBottom: 8,
  }
});

// create component & render
class Conversation extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => Actions.tchat()}
      >
        <View style={{ flex: 1 }}>
          <ProfilePicture size={40} />
        </View>

        <View style={{ flex: 5 }}>
          <Text style={styles.title}>John Doe</Text>
          <Text numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// make component avalaible to other parts
export default Conversation;
