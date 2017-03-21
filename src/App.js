// import library & package
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
//import Store from 'react-native-simple-store';

// import components
import HomeScene from './components/scenes/HomeScene';

// create component & render
class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'home'} title={'onclick'} component={HomeScene} />
      </Router>
    );
  }
}

// export component
export default App;
