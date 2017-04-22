import React from "react";
import { AsyncStorage } from "react-native";
import SocketIOClient from "socket.io-client";
import {
  GiftedChat,
  Bubble,
  MessageText,
  Time,
  Send
} from "react-native-gifted-chat";
import Api from "../core/Api";
import Global from "../core/Global";
import Config from "../core/Config";

const USER_ID = Api.getUser()._id;
console.log("USERID ", USER_ID);

export default class TchatScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userId: null,
      talk_id: null
    };

    this.getMessages = this.getMessages.bind(this);
    this.loadMessages = this.loadMessages.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
    this.onMessageReceived = this.onMessageReceived.bind(this);
    //this.client = SocketIOClient('http://192.168.1.10:3000/',{jsonp: false});
    // this.client = SocketIOClient('http://localhost:3000',{jsonp: false});
    this.client = SocketIOClient(Config.tchat, { jsonp: false });
    this._isMounted = false;

    // Le serveur envoie la conversation demandée
    this.client.on("serverloadsMessages", this.loadMessages);
    // Le serveur envoie la liste des messages mise à jour
    this.client.on("serverSendsMessage", this.onMessageReceived);

    this.USER_ID = Api.getUser()._id;
    this.USER_STATUS = Api.getUser().status;
  }

  componentDidMount() {
    // On récupère la conversation en cours
    this.getMessages();

    // On récuprère l'id de l'utilisateur loggé
    this.setState({
      userId: Api.getUser()._id
    });
    this._isMounted = true;
  } // componentDidMount

  componentWillUnmount() {
    this._isMounted = false;
  }

  // Récupère la conversation en cours entre un recruteur et un candidat
  getMessages() {
    console.log("getMessages USER_ID ", this.USER_ID);
    console.log("getMessages USER_STATUS ", this.USER_STATUS);

    // Le client demande au serveur de lui envoyer la conversation
    this.client.emit("clientGetMessages", {
      userId: this.USER_ID,
      userStatus: this.USER_STATUS,
      speakerId: this.props.speakerId
    });
  } // getMessages

  // Le serveur envoie la conversation demandée
  loadMessages(talk) {
    console.log("client loads messages");
    console.log("loadMessages talk ", talk);
    if (this._isMounted) {
      if (talk) {
        // Chargement des messages, du plus vieux au plus récent
        // Si la conversation vient d'être créée, il n'y a pas encore de messages => []
        this.setState({
          messages: talk.messages ? talk.messages.reverse() : [],
          talk_id: talk._id // récupère l'id de la conversation
        });
      }
    }
  } // loadMessages

  // Le serveur envoie la liste des messages mise à jour
  onMessageReceived(messages) {
    console.log("client recieves message");
    messages.reverse();
    if (this._isMounted) {
      this.setState({
        messages // met à jour les messages à afficher
      });
    }
  } // onMessageReceived

  // L'utilisateur envoie un message
  onSendMessage(message) {
    console.log("client sends message");
    // On créé l'objet "message", avec le message + données utilisateur + date du message
    var messageData = {
      text: message[0].text,
      user: {
        _id: Api.getUser()._id,
        name: Api.getUser().firstname,
        avatar: Api.getUser().photo
      },
      createdAt: new Date(message[0].createdAt)
    };

    // Le client envoie l'objet message au serveur et l'id de la conversation
    this.client.emit("clientSendsMessage", {
      message: messageData,
      talk_id: this.state.talk_id
    });
  } // onSendMessage

  // Styling du bouton "Send"
  renderSend(props) {
    return (
      <Send
        {...props}
        textStyle={{
          color: `${Global.colors.primary}`
        }}
      />
    ); // return
  } // renderSend

  // Styling des dates des messages
  renderTime(props) {
    return (
      <Time
        {...props}
        textStyle={{
          left: { color: `${Global.colors.tchatColor}` },
          right: { color: `${Global.colors.tchatColor}` }
        }}
      />
    ); // return
  } // renderTime

  // Styling des textes des messages
  renderMessageText(props) {
    return (
      <MessageText
        {...props}
        textStyle={{
          left: { color: `${Global.colors.tchatColor}` },
          right: { color: `${Global.colors.tchatColor}` }
        }}
      />
    ); // return
  } //renderMessageText

  // Styling des bulles
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: { backgroundColor: `${Global.colors.secondary}` },
          right: { backgroundColor: `${Global.colors.primary}` }
        }}
      />
    ); // return
  } //renderBubble

  render() {
    var user = { _id: this.state.userId || -1 };

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSendMessage}
        user={user}
        renderBubble={this.renderBubble}
        renderMessageText={this.renderMessageText}
        renderTime={this.renderTime}
        renderSend={this.renderSend}
      />
    );
  }
}
