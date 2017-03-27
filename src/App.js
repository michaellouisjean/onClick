// import library & package
import React from 'react';
import {
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Global from './components/core/Global';


// import components
import LoginScene from './components/scenes/LoginScene';
import TchatListScene from './components/scenes/TchatListScene';
import OffersScenes from './components/scenes/OffersScenes';
import HomeScene from './components/scenes/HomeScene';
import Favorites from './components/scenes/Favorites';
import TchatScene from './components/scenes/TchatScene';
import ProfileScene from './components/scenes/ProfileScene';
import ViewProfileScene from './components/scenes/ViewProfileScene';
import ViewOfferScene from './components/scenes/ViewOfferScene';

// create component & render
class App extends React.Component {
  constructor(props) {
    super(props);
    //this.renderHomeFlow = this.renderHomeFlow.bind(this);
    //this.renderTchatFlow = this.renderTchatFlow.bind(this);
    //this.renderFavoritesFlow = this.renderFavoritesFlow.bind(this);
    //this.renderTchatScene = this.renderTchatScene.bind(this);
    //this.renderProfileScene = this.renderProfileScene.bind(this);
  }

  // créations de fonctions pour suivre le Flow
  renderHomeFlow() {
    return (
      <Scene
        key={'homeFlow'}
        icon={(props) =>
          <Icon
            name={'ios-home'}
            color={props.selected ? Global.colors.accent : '#AAA'}
            style={{ fontSize: 25 }}
          />
        }
      >
        <Scene
          titleStyle={{ color: '#4D6DC3', fontWeight: 'bold' }}
          key={'HomeScene'}
          title={'Home'}
          navigationBarStyle={{
            backgroundColor: 'white',
            shadowColor: '#444444',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}
          component={HomeScene}
        />
        <Scene
          titleStyle={{ color: '#4D6DC3', fontWeight: 'bold' }}
          key={'profile'}
          hideNavBar={false}
          navigationBarStyle={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
          component={ViewProfileScene}
        />
        <Scene
          key={'viewOffer'}
          hideNavBar={false}
          navigationBarStyle={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}
          component={ViewOfferScene}
        />
      </Scene>
    );
  }

  renderTchatFlow() {
    return (
      <Scene
        key={'tchatFlow'}
        icon={(props) =>
          <Icon
            name={'ios-chatbubbles'}
            color={props.selected ? Global.colors.accent : '#AAA'}
            style={{ fontSize: 25 }}
          />
        }
      >
        <Scene
          titleStyle={{ color: '#4D6DC3', fontWeight: 'bold' }}
          key={'tchatListScene'}
          title={'Conversations'}
          navigationBarStyle={{
            backgroundColor: 'white',
            shadowColor: '#444444',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}
          component={TchatListScene}
        />
      </Scene>
    );
  }

  renderFavoritesFlow() {
    return (
      <Scene
        key={'offerFlow'}
        icon={(props) =>
          <Icon
            name={'ios-albums'}
            color={props.selected ? Global.colors.accent : '#AAA'}
            style={{ fontSize: 25 }}
          />
        }
      >
        <Scene
          titleStyle={{ color: '#4D6DC3', fontWeight: 'bold' }}
          key={'favorites'}
          title={'Favorites'}
          navigationBarStyle={{
            backgroundColor: 'white',
            shadowColor: '#444444',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}
          component={Favorites}
        />
      </Scene>
    );
  }

  renderTchatScene() {
    return (
      <Scene
        key={'tchat'}
        titleStyle={{ color: '#4D6DC3', fontWeight: 'bold' }}
        title={'Messages'}
        hideNavBar={false}
        direction={'vertical'}
        navigationBarStyle={{ backgroundColor: '#ffffff' }}
        component={TchatScene}
      />
    );
  }

  renderProfileScene() {
    return (
      <Scene
        titleStyle={{ color: '#4D6DC3', fontWeight: 'bold' }}
        key={'ProfileScene'}
        component={ProfileScene}
        navigationBarStyle={{
          backgroundColor: 'transparent',
          borderBottomWidth: 0
        }}
        icon={(props) =>
          <Icon
            name={'ios-contact'}
            color={props.selected ? Global.colors.accent : '#AAA'}
            style={{ fontSize: 25 }}
          />
        }
      />
    );
  }

  render() {
    return (
      <Router>

        <Scene
          key={'login'}
          hideNavBar
          component={LoginScene}
        />

        <Scene
          key={'offer'}
          title={'onClick'}
          component={OffersScenes}
        />

        <Scene
          key={'tab'}
          tabs
          type={'replace'}
          style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#C4C4C4' }}
        >
          {this.renderHomeFlow()}
          {this.renderTchatFlow()}
          {this.renderFavoritesFlow()}
          {this.renderProfileScene()}
        </Scene>
        {this.renderTchatScene()}
        {/*Tchat en dehors de la Tab afin de ne pas voir apparaitre la Tab*/}
      </Router>
    );
  }
}

// export component
export default App;
