// import library
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
//import Global from '../core/Global';

class TabIcon extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={27}
        color='#BBBBBB'
      />
    );
  }
}

export default TabIcon;
