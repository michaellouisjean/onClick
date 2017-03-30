// import library
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// import component
//import ProfilePicture from './ProfilePicture';
import DefaultAvatar from './DefaultAvatar';
import Global from '../core/Global';

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Global.colors.primary,
    marginBottom: 8,
  }
});
const MESSAGES = [
  "Je peux vous rejoindre directement. Pouvez-vous me donner une adresse ?",
  "Vous: Bonjour, seriez-vous disponible pour discuter de l'offre d'emploi que je propose ?",
  "Bonjour, je serais très intéresser pour échanger avec vous à propose de votre offre de stage. Êtes-vous disponible ?",
  "Vous: Oui tout à fait. Je vous laisse mais disons nous à demain dans ce cas",
  "Vous: Pourriez-vous commencer la semaine prochaine ?",
  "Je vous remercie, c'est tout-à-fait le poste que je cherchais",
  "Vous: Super ! Merci beaucoup. Et bien je vous dis à tout à l'heure dans ce cas",
  "Je peux, si vous voulez, transmettre votre offre à une amie qui cherche exactement ce type d'emploi",
  "J'ai des bases solides sur NodeJS React et React Native. Voici mon lien vers Github: ",
  "Côté backend j'ai surtout utilisé Ruby on Rails Php et MySQL",
  "Surtout React et React Native pour la partie Front.",
  "Oui je suis Dev Fullstack Javascript et également Scrum Master",
];
// create component & render
class Conversation extends React.Component {
  renderMessage() {
    const number = Math.floor(Math.random() * ((MESSAGES.length - 1) - 0) + 0);
    return MESSAGES[number];
  }

  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => Actions.tchat({ speakerId: this.props._id })}
      >
        <View style={{ flex: 1 }}>
          <DefaultAvatar
            size={40}
            photo={this.props.photo}
          />
        </View>

        <View style={{ flex: 5 }}>
          <Text style={styles.title}>{this.props.firstname} {this.props.lastname}</Text>
          <Text
            numberOfLines={2}
            style={{ color: '#515151' }}
          >{this.renderMessage()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// make component avalaible to other parts
export default Conversation;
