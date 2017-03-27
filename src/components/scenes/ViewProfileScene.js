// import library & packages
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  InteractionManager,
} from 'react-native';
import Map from '../containers/MapContainer';
//import { BlurView, VibrancyView } from 'react-native-blur';

// import component
import Global from '../core/Global';
import ProfileHeader from '../commons/ProfileHeader';

// styles
const styles = StyleSheet.create({
  section: {
    // width: '100%',
    // paddingVertical: 40,
    // paddingHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#999999',
  },
  sectionPadding: {

  },
  backgroundEven: {
    backgroundColor: Global.colors.backgroundEven,
  },
  backgroundOdd: {
    backgroundColor: Global.colors.backgroundOdd,
  },
  textTitle: {

  },
  textSubtitle: {
    fontSize: 16,
    color: '#4D6DC3',
    marginBottom: 10,
  },
  textName: {
    fontSize: 25,
    fontWeight: '200',
    color: '#4D6DC3',
  },
  titleSection: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4D6DC3',
    marginBottom: 30,
  },
  subSection: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
});

// create component & render
class ViewProfileScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isLoaded: true,
      });
    });
  }

  renderMap() {
    if (this.state.isLoaded === false) {
      return null;
    }
    return <Map loc={this.props.loc} />;
  }

  render() {
    console.log('#ViewProfileScene => ', this.props);
    return (
      <View style={Global.container}>
        <ScrollView>

          {/* profile header content */}
          <ProfileHeader
            _id={this.props._id}
            imageSize={100}
            city={this.props.city}
            photo={this.props.photo}
            firstname={this.props.firstname}
            lastname={this.props.lastname}
            description={this.props.description}
            cv={this.props.cv}
          />
          {/* END -- profile header content */}

          {/* section */}
          <View style={[styles.section, styles.backgroundEven]}>
            <Text style={styles.titleSection} >My best experience</Text>
            <Text style={styles.textSubtitle} >Ubisoft Paris</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quod optio,
              molestiae, quibusdam quae vel sit architecto maiores officia nostrum laborum?</Text>
          </View>

          {/* section */}
          <View style={[styles.section, styles.backgroundOdd]}>
            <Text style={styles.titleSection} >My degrees</Text>

            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >Motion Designer - 2016</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >Motion Designer - 2016</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>
          </View>

          {/* section */}
          <View style={[styles.section, styles.backgroundEven]}>
            <Text style={styles.titleSection} >My 3 greatest qualities</Text>

            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >Quality 1</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >Quality 2</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >Quality 3</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>
          </View>

          {/* MAP */}
          <View style={[styles.section, styles.backgroundEven]}>
            <Text style={styles.titleSection} >We've meet here :</Text>
            {this.renderMap()}
          </View>

        </ScrollView>
      </View>
    );
  }
}

// make component avalaible to other parts
export default ViewProfileScene;
