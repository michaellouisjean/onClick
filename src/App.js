// import library & package
import React from 'react';
import {
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

// import components
//import LoginScene from './components/scenes/LoginScene';
import HomeScene from './components/scenes/HomeScene';
import ViewProfileScene from './components/scenes/ViewProfileScene';

// create component & render
class App extends React.Component {
  render() {
    return (
      <Router>
      {/*<Scene
        key={'login'}
        title={'Login'}
        component={LoginScene}
      />*/}

        <Scene
          key={'home'}
          title={'onClick'}
          navigationBarStyle={{
            backgroundColor: 'transparent',
          }}
          component={HomeScene}
        />

        <Scene
          key={'profile'}
          navigationBarStyle={{
            backgroundColor: 'transparent',
          }}
          component={ViewProfileScene}
        />
      </Router>
    );
  }
}

// export component
export default App;
