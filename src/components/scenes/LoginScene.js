// import library
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

import Api from '../core/Api';

// import component
import SendButton from '../commons/SendButton';

const PADDING = 20;
const containerWidth = Dimensions.get('window').width - (PADDING * 2);
const inputWidth = Dimensions.get('window').width - (PADDING * 2) - (PADDING * 2);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
  },
  container: {
    backgroundColor: '#FFF',
    marginVertical: 50,
    width: containerWidth,
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  h1: {
    marginTop: 50,
    marginBottom: 20,
    color: '#4D6DC3',
    fontWeight: 'bold',
    fontSize: 20,
  },
  h2: {
    color: '#4D6DC3',
    marginTop: 40,
    fontSize: 17,
  },
  inputsContainer: {
    marginTop: 40,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#4D6DC3',
    marginTop: 5,
  },
  input: {
    height: 40,
    width: inputWidth,
    backgroundColor: 'white',
  }
});


// create component & render
class LoginScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'annaelle@onclick.io',
      password: 'password01',
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onChangeEmail(text) {
    const email = text;
    this.setState({
      email,
    });
    console.log(this.state.email);
  }

  onChangePassword(text) {
    const password = text;
    this.setState({
      password,
    });
    console.log(this.state.password);
  }


  onLoginSubmit() {
    console.log('LoginScene#onLoginSubmit');
    Api.logIn({
      email: this.state.email,
      password: this.state.password,
    }, () =>
    Actions.home());
  }

  sendInfo() {
    console.log({ email: this.state.email, password: this.state.password });
  }

  render() {
    return (
      <Image
        source={require('../../assets/images/bg-01.png')}
        style={styles.background}
      >
        <View style={styles.container} >
          <Text style={styles.h1} >
            Donner un autre sens au travail !
          </Text>
          <View style={styles.inputsContainer} >
            <View style={styles.inputContainer} >
              <TextInput
                style={styles.input}
                type="email"
                autoCapitalize='none'
                placeholder="Email"
                value={this.state.email}
                onChangeText={this.onChangeEmail}
                value={this.state.email}
              />
            </View>
            <View style={styles.inputContainer} >
              <TextInput
                style={styles.input}
                type="password"
                autoCapitalize='none'
                placeholder="Password"
                value={this.state.password}
                onChangeText={this.onChangePassword}
                value={this.state.password}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => this.onLoginSubmit()}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#4D6DC3',
                  marginTop: 70,
                  fontWeight: 'bold'
                }}
              >
                LogIn</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.h2} >
            Or
           </Text>

          <View style={{ flex: 1 }} >
            <SendButton
              name={'Create account'}
              say={this.sendInfo}
            />
          </View>
        </View>
      </Image>
    );
  }
}

// export component
export default LoginScene;
