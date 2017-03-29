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

// import component
import Global from '../core/Global';
import OfferHeader from '../commons/OfferHeader';

// styles
const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#999999',
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
    color: '#E12773',
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
    const {
      announces,
    } = this.props;

    return (
      <View style={{
        flex: 1,
        paddingTop: 20,
        paddingBottom: 50,
      }}
      >
        <View style={Global.container}>
          <ScrollView>

            <OfferHeader
              _id={this.props._id}
              imageSize={100}
              city={this.props.city}
              photo={this.props.photo}
              title={this.props.announces[0].title}
              society={this.props.society}
              description={this.props.announces[0].description}
              salary={this.props.announces[0].salary}
            />

            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >Required skills :</Text>

              <View style={styles.subSection}>
                <Text style={styles.textSubtitle} >
                  {announces[0].competences[0].name} - Level: {announces[0].competences[0].level}
                </Text>
              </View>

              <View style={styles.subSection}>
                <Text style={styles.textSubtitle} >
                  {announces[0].languages[0].name} - Level: {announces[0].languages[0].level}
                </Text>
              </View>

            </View>

            {/* MAP */}
            <View style={[styles.section, styles.backgroundEven]}>
              <Text style={styles.titleSection} >We've meet here :</Text>
              {this.renderMap()}
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

// make component avalaible to other parts
export default ViewProfileScene;
