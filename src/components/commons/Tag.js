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
    if (level === 'junior') {
      color = Global.colors.secondary;
    } else if (level === 'middle') {
      color = Global.colors.primary;
    } else if (level === 'senior') {
      color = Global.colors.accent;
    }

    return color;
  }

  render() {
    const {
      skills,
    } = this.props;

    console.log('#Tages', skills.competences[0]);
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

