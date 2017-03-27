import React from 'react';
// import { AsyncStorage } from 'react-native';
// import SocketIOClient from 'socket.io-client';
// import WebSocket from 'ws';
// const ws = new WebSocket('ws://www.host.com/path');
// const ws = new WebSocket('ws://localhost');

import io from 'socket.io';

import { GiftedChat } from 'react-native-gifted-chat';
import Api from '../core/Api';


const USER_ID = Api.getUser()._id;
console.log('USERID ', USER_ID);


export default class TchatScene extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      userId: null
    };
  }

  componentDidMount() {
  }

  onSend() {
    console.log('Client sends message');
  }

  render() {
    const user = { _id: this.state.userId || -1 };

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={user}
      />
    );
  }
}
