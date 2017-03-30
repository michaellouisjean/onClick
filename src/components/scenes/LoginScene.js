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
import { Actions } from 'react-native-router-flux';
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
  },
  container: {
    backgroundColor: '#FFF',
    marginVertical: 75,
    width: containerWidth,
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  h1: {
    marginTop: 50,
    marginBottom: 20,
    color: '#4D6DC3',
    fontWeight: '300',
    fontSize: 20,
  },
  h3: {
      fontSize: 20,
      color: '#4D6DC3',
      marginTop: 60,
      marginBottom: 20,
      fontWeight: '500',
  },
  inputsContainer: {
    marginTop: 50,
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
    //console.log(this.state.email);
  }

  onChangePassword(text) {
    const password = text;
    this.setState({
      password,
    });
    //console.log(this.state.password);
  }


  onLoginSubmit() {
    // console.log('#LoginScene : onLoginSubmit() => ', {
    //   email: this.state.email,
    //   password: this.state.password
    // });
    Api.logIn({
      email: this.state.email,
      password: this.state.password,
    }, () => Actions.tab());
  }

  sendInfo() {
    //console.log({ email: this.state.email, password: this.state.password });
  }

  render() {
    return (
      <Image
        source={require('../../assets/images/bg-01.png')}
        style={styles.background}
      >
        <View style={styles.container} >
          <Text style={styles.h1} >
            Rencontrez votre carrière !
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
            <Text style={styles.h3}>Connexion</Text>
          </TouchableOpacity>

          <View style={{ flex: 1 }} >
            <SendButton
              name={'Inscription'}
              action={this.sendInfo}
            />
          </View>
        </View>
      </Image>
    );
  }
}

// export component
export default LoginScene;
