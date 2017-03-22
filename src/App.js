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

// import Icon from 'react-native-vector-icons/Ionicons';


// import components
import OffersScenes from './components/scenes/OffersScenes';
// import LoginScene from './components/scenes/LoginScene';
// import HomeScene from './components/scenes/HomeScene';

// create component & render
class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'home'} title={'onClick'} component={OffersScenes} />
      </Router>
    );
  }
}

// export component
export default App;
