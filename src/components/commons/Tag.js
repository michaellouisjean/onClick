// import library
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

// import component
import Global from '../core/Global';

// create component & render
class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.renderBackgroundLevel = this.renderBackgroundLevel.bind(this);
  }

  // function to change tag background color depending of required level
  renderBackgroundLevel(level) {
    let color = null;
    if (level === 'Débutant') {
      color = Global.colors.secondary;
    } else if (level === 'Confirmé') {
      color = Global.colors.primary;
    } else if (level === 'Expert') {
      color = Global.colors.accent;
    }

    return color;
  }

  render() {
    const {
      skills,
    } = this.props;

    //console.log('#Tags', skills.competences[0]);
    return (
      <View
        style={[
          Global.cardTagContainer,
          { backgroundColor: this.renderBackgroundLevel(skills.competences[0].level) }
        ]}
      >
        <Text style={Global.cardTags}>{skills.competences[0].name}</Text>
      </View>
    );
  }
}

// export component
export default Tag;

