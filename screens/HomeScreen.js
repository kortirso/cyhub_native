import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import store from '../store';

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
    this.setState({user: store.getState().data.user});
  }

  _onPartnersPress() {
    this.props.navigation.navigate('Partners');
  }

  _memberDaysLeft(user) {
    if (user.member != null) {
      return (
        <View style={styles.startedContainer}>
          <Text style={styles.simpleText}>You got</Text>
          <Text style={styles.getStartedText}>{user.member.days_left}</Text>
          <Text style={styles.simpleText}>Hubster days left</Text>
          <Text style={styles.simpleTextSmall}>For now that is!</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.guestContainer}>
          <Text style={styles.simpleText}>You are not CyHub member yet</Text>
          <Text style={styles.simpleText}>You need to call Michael Jakobsen</Text>
          <Text style={styles.simpleTextSmall}>For now that is!</Text>
        </View>
      )
    }
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
                {this._memberDaysLeft(this.state.user)}
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
  container: {flex: 1, backgroundColor: '#FFF'},
  contentContainer: {paddingTop: 0},
  welcomeContainer: {paddingVertical: 10, paddingLeft: 15, flex: 1, flexDirection: 'row', borderBottomWidth: 5, borderBottomColor: '#000'},
  logoImage: {width: 50, height: 50, resizeMode: 'contain', marginRight: 20},
  welcomeGreeting: {fontFamily: 'opensans-regular', fontSize: 14},
  welcomeUser: {fontFamily: 'oswald-medium', fontSize: 24, color: '#3A3A3A'},
  opacityBackground: {},
  startedContainer: {alignItems: 'center', paddingVertical: 10, borderBottomWidth: 5, borderBottomColor: '#000', backgroundColor: 'rgba(255,255,255,0.75)'},
  guestContainer: {alignItems: 'center', paddingVertical: 30, borderBottomWidth: 5, borderBottomColor: '#000', backgroundColor: 'rgba(255,255,255,0.75)'},
  getPartnersContainer: {alignItems: 'center', paddingVertical: 0, paddingHorizontal: 0, borderBottomWidth: 5, borderBottomColor: '#000', backgroundColor: 'rgba(255,255,255,0.75)'},
  simpleText: {fontFamily: 'opensans-regular', fontSize: 16, lineHeight: 24, color: 'rgba(96,100,109,1)', backgroundColor: 'transparent'},
  simpleTextSmall: {fontFamily: 'opensans-regular', fontSize: 14, lineHeight: 24, color: 'rgba(96,100,109,1)', backgroundColor: 'transparent'},
  getStartedText: {fontFamily: 'oswald-medium', fontSize: 100, color: '#3A3A3A', backgroundColor: 'transparent'},
  partnersText: {fontFamily: 'oswald-medium', fontSize: 40, color: '#3A3A3A', backgroundColor: 'transparent', paddingVertical: 65, paddingHorizontal: 50}
});
