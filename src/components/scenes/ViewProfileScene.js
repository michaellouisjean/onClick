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
import ProfileHeader from '../commons/ProfileHeader';

// styles
const styles = StyleSheet.create({
  section: {
    // width: '100%',
    // paddingVertical: 40,
    // paddingHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
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
    this.renderQualities = this.renderQualities.bind(this);
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
    return <Map loc={this.props.loc} photo= {this.props.photo}/>;
  }

  renderQualities(qualities) {
    console.log(qualities);
    qualities.map((quality) => (<View style={styles.subSection}>
      <Text style={styles.textSubtitle} >{quality}</Text>
    </View>));
  }

  render() {
    console.log('#ViewProfileScene => ', this.props);
    const {
      _id,
      city,
      photo,
      firstname,
      lastname,
      description,
      cv
    } = this.props;

    return (
      <View
      style={Global.container}
      style={{
        flex: 1,
        paddingTop: 20,
        paddingBottom: 50,
        backgroundColor: Global.colors.primary

      }}>
        <View style={{
          backgroundColor: 'white'
        }}>
        <ScrollView>

          {/* profile header content */}
          <ProfileHeader
            _id={_id}
            imageSize={100}
            city={city}
            photo={photo}
            firstname={firstname}
            lastname={lastname}
            description={description}
            cv={cv}
          />
          {/* END -- profile header content */}

          {/* section */}
          <View style={[styles.section, styles.backgroundEven]}>
            <Text style={styles.titleSection} >Ma meilleure experience :</Text>
            <Text style={styles.textSubtitle} >{cv.experience}</Text>
          </View>

          {/* section */}
          <View style={[styles.section, styles.backgroundOdd]}>
            <Text style={styles.titleSection} >Mon diplôme :</Text>

            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >{cv.degree}</Text>
            </View>

          </View>

          {/* section */}
          <View style={[styles.section, styles.backgroundEven]}>
            <Text style={styles.titleSection} >Mes 3 meilleures qualités :</Text>

            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >{cv.qualities[0]}</Text>
            </View>
            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >{cv.qualities[1]}</Text>
            </View>
            <View style={styles.subSection}>
              <Text style={styles.textSubtitle} >{cv.qualities[2]}</Text>
            </View>
          </View>

          {/* MAP */}
          <View style={[styles.section, styles.backgroundEven]}>
            <Text style={styles.titleSection} >Nous nous sommes rencontrés ici :</Text>
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
