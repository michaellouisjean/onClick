// import library & package
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

// import components
import HomeScene from './components/scenes/HomeScene';

const styles = StyleSheet.create({
  icons: {
    fontSize: 24,
  }
});
// create component & render
class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene
          key={'home'}
          title={'onclick'}
          component={HomeScene}
        />
      </Router>
    );
  }
}

// export component
export default App;
