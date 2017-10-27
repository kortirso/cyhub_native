import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.screenProps.fontLoaded ? (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <View style={styles.welcomeContainer}>
                <Image source={require('../assets/images/cyhub-icon.png')} style={styles.logoImage} />
                <View>
                  <Text style={styles.welcomeGreeting}>Hello!</Text>
                  <Text style={styles.welcomeUser}>{this.state.user.email}</Text>
                </View>
              </View>
              <View style={styles.getStartedContainer}>
                <Text style={styles.simpleText}>You got</Text>
                <Text style={styles.getStartedText}>{this.state.user.days_left}</Text>
                <Text style={styles.simpleText}>Hubster days left</Text>
                <Text style={styles.simpleTextSmall}>For now that is!</Text>
              </View>
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
  welcomeUser: {fontFamily: 'oswald-medium', fontSize: 24},
  getStartedContainer: {alignItems: 'center', paddingVertical: 10, borderBottomWidth: 5, borderBottomColor: '#000'},
  simpleText: {fontFamily: 'opensans-regular', fontSize: 16, lineHeight: 24, color: 'rgba(96,100,109,1)'},
  simpleTextSmall: {fontFamily: 'opensans-regular', fontSize: 14, lineHeight: 24, color: 'rgba(96,100,109,1)'},
  getStartedText: {fontFamily: 'oswald-medium', fontSize: 100, color: 'rgba(96,100,109,1)'}
});
