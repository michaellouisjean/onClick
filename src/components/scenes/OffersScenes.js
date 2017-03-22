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
import SkillInput from '../commons/SkillInput';

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
    marginTop: 30,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#4D6DC3',
    marginTop: 10,
  },
  input: {
    height: 40,
    width: inputWidth,
    backgroundColor: 'white',
  }
});


// create component & render
class OffersScenes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desciption: "",
      skills: "",
      salary: "",
      contact: "",
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSkills = this.onChangeSkills.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    // this.onPress = onPress.bind(this);
  }

  onChangeTitle(title) {
    this.setState({
      title,
    });
  }


  onChangeDescription(description) {
    this.setState({
      description,
    });
  }

  onChangeSkills(skills) {
    this.setState({
      skills,
    });
  }

  onChangeSalary(salary) {
    this.setState({
      salary,
    });
  }

  onChangeContact(contact) {
    this.setState({
      contact,
    });
  }

  render() {
    return (
      <Image
        source={require('../../assets/images/bg02.png')}
        style={styles.background}>
        <View
          style={styles.container}>
          <Text
            style={styles.h1}>
            Create new job offer
          </Text>
          <View
            style={styles.inputsContainer}>
            <View
              style={styles.inputContainer}>
              <TextInput style={styles.input}
                type="title"
                placeholder="Title"
                onChangeText={this.onChangeTitle}
                />
            </View>
            <View
              style={styles.inputContainer}>
              <TextInput style={styles.input}
                type="description"
                placeholder="Description"
                onChangeText={this.onChangeDescription}
                />
            </View>
            <SkillInput>
            </SkillInput>
            <View
              style={styles.inputContainer}>
              <TextInput style={styles.input}
                type="salary"
                placeholder="Salary"
                onChangeText={this.onChangeSalary}
                />
            </View>
            <View
              style={styles.inputContainer}>
              <TextInput style={styles.input}
                type="contact"
                placeholder="Contact"
                onChangeText={this.onChangeContact}
                />
            </View>
          </View>
            <View style={{
                flex: 1,
                }}>
              <TouchableOpacity
                  onPress={() => console.log('Hello')}>
                <View style={{
                      shadowOpacity: .1,
                      shadowOffset: {
                      width: 1,
                      height: 3,
                      },
                      borderRadius: 20,
                      marginTop: 35,
                      justifyContent: 'center',
                      paddingVertical: 10,
                      paddingHorizontal: 60,
                    }}>
                  <Text style={{
                      fontSize: 20,
                      color: '#E12773',
                    }}>
                    Publish</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
      </Image>
    );
  }
}

// export component
export default OffersScenes;
