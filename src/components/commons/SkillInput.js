// import library
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';
import Global from '../core/Global';

const PADDING = 20;
const containerWidth = Dimensions.get('window').width - (PADDING * 2);
const inputWidth = Dimensions.get('window').width - (PADDING * 2) - (PADDING * 2);

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: inputWidth,
    backgroundColor: 'white',
  }
});

// create component & render
class SkillInput extends React.Component {

  render() {
    return (
      <View
        style={{
            flexDirection: 'row',
          }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#4D6DC3',
            marginTop: 10,
            flex: 1,
          }}>
        <TextInput
          style={styles.input}
          type="skills"
          placeholder="Skills"
          onChangeText={this.onChangeSkills}
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('#OffersScenes.js => favorites button')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            style={Global.icons}
            name={'ios-add-circle-outline'}
            color={'#9B9B9B'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// export component
export default SkillInput;
