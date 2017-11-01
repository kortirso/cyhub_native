import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    this.setState({user: this.props.screenProps.user});
  }

  _onPartnersPress() {
    this.props.navigation.navigate('Partners');
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.screenProps.fontLoaded ? (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <View style={styles.welcomeContainer}>
                <Image source={require('../assets/images/cyhub-icon.png')} style={styles.logoImage} />
                <View>
                  <Text style={styles.welcomeGreeting}>Ya Sas!</Text>
                  <Text style={styles.welcomeUser}>{this.state.user.username}</Text>
                </View>
              </View>
              <ImageBackground source={require('../assets/images/backgrounds/back-days.jpg')} style={styles.opacityBackground}>
                <View style={styles.getStartedContainer}>
                  <Text style={styles.simpleText}>You got</Text>
                  <Text style={styles.getStartedText}>{this.state.user.days_left}</Text>
                  <Text style={styles.simpleText}>Hubster days left</Text>
                  <Text style={styles.simpleTextSmall}>For now that is!</Text>
                </View>
              </ImageBackground>
              <ImageBackground source={require('../assets/images/backgrounds/back-partners.jpg')} style={styles.opacityBackground}>
                <View style={styles.getPartnersContainer}>
                  <Text style={styles.partnersText} onPress={this._onPartnersPress.bind(this)}>HERE'S YOUR HUB PARTNERS</Text>
                </View>
              </ImageBackground>
            </ScrollView>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#E5E5E5'},
  contentContainer: {paddingTop: 0},
  welcomeContainer: {paddingVertical: 10, paddingLeft: 15, flex: 1, flexDirection: 'row', borderBottomWidth: 5, borderBottomColor: '#000'},
  logoImage: {width: 50, height: 50, resizeMode: 'contain', marginRight: 20},
  welcomeGreeting: {fontFamily: 'opensans-regular', fontSize: 14},
  welcomeUser: {fontFamily: 'oswald-medium', fontSize: 24, color: '#3A3A3A'},
  opacityBackground: {},
  getStartedContainer: {alignItems: 'center', paddingVertical: 10, borderBottomWidth: 5, borderBottomColor: '#000', backgroundColor: 'rgba(255,255,255,0.75)'},
  getPartnersContainer: {alignItems: 'center', paddingVertical: 0, paddingHorizontal: 0, borderBottomWidth: 5, borderBottomColor: '#000', backgroundColor: 'rgba(255,255,255,0.75)'},
  simpleText: {fontFamily: 'opensans-regular', fontSize: 16, lineHeight: 24, color: 'rgba(96,100,109,1)', backgroundColor: 'transparent'},
  simpleTextSmall: {fontFamily: 'opensans-regular', fontSize: 14, lineHeight: 24, color: 'rgba(96,100,109,1)', backgroundColor: 'transparent'},
  getStartedText: {fontFamily: 'oswald-medium', fontSize: 100, color: '#3A3A3A', backgroundColor: 'transparent'},
  partnersText: {fontFamily: 'oswald-medium', fontSize: 40, color: '#3A3A3A', backgroundColor: 'transparent', paddingVertical: 65, paddingHorizontal: 50}
});
