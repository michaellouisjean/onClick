// import library & package
import React from 'react';
import {
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

// import components
import LoginScene from './components/scenes/LoginScene';
import HomeScene from './components/scenes/HomeScene';
import ViewProfileScene from './components/scenes/ViewProfileScene';
import TchatScene from './components/scenes/TchatScene';
import OffersScenes from './components/scenes/OffersScenes';

// create component & render
class App extends React.Component {
  render() {
    return (
      <Router>
      {/*<Scene
        key={'offer'}
        title={'onClick'}
        component={OffersScenes} />*/}
      <Scene
        key={'login'}
        hideNavBar
        component={LoginScene}
      />

        <Scene
          key={'home'}
          title={'onClick'}
          hideNavBar={false}
          navigationBarStyle={{ backgroundColor: 'transparent' }}
          component={HomeScene}
        />

        <Scene
          key={'profile'}
          hideNavBar={false}
          navigationBarStyle={{ backgroundColor: 'transparent' }}
          component={ViewProfileScene}
        />

        <Scene
          key={'tchat'}
          title={'Message'}
          hideNavBar={false}
          direction={'vertical'}
          navigationBarStyle={{ backgroundColor: '#ffffff' }}
          component={TchatScene}
        />
      </Router>
    );
  }
}

// export component
export default App;
