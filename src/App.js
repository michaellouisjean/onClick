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
import OffersListScene from './components/scenes/OffersListScene';
import TchatScene from './components/scenes/TchatScene';
import ProfileScene from './components/scenes/ProfileScene';
import ViewProfileScene from './components/scenes/ViewProfileScene';
import ViewOfferScene from './components/scenes/ViewOfferScene';

// create component & render
class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderHomeFlow = this.renderHomeFlow.bind(this);
    this.renderTchatFlow = this.renderTchatFlow.bind(this);
    this.renderOffersFlow = this.renderOffersFlow.bind(this);
    this.renderTchatScene = this.renderTchatScene.bind(this);
    this.renderProfileScene = this.renderProfileScene.bind(this);
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
          component={HomeScene}
        />
        <Scene
          titleStyle={{ color: '#4D6DC3', fontWeight: 'bold' }}
          key={'profile'}
          title={'Profile'}
          hideNavBar={false}
          navigationBarStyle={{ backgroundColor: 'transparent' }}
          component={ViewProfileScene}
        />
        <Scene
          key={'viewOffer'}
          title={'View offer'}
          hideNavBar={false}
          navigationBarStyle={{ backgroundColor: 'transparent' }}
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
          component={TchatListScene}
        />
      </Scene>
    );
  }

  renderOffersFlow() {
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
          key={'offersListScene'}
          title={'Offers'}
          component={OffersListScene}
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
        title={'Profile'}
        component={ProfileScene}
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
          {this.renderOffersFlow()}
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
