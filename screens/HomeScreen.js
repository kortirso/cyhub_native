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
    this.setState({user: this.props.screenProps});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image source={ __DEV__ ? require('../assets/images/robot-dev.png') : require('../assets/images/robot-prod.png') } style={styles.welcomeImage} />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Hello, {this.state.user.email}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  contentContainer: {paddingTop: 30},
  welcomeContainer: {alignItems: 'center', marginTop: 10, marginBottom: 20},
  welcomeImage: {width: 100, height: 80, resizeMode: 'contain', marginTop: 3, marginLeft: -10},
  getStartedContainer: {alignItems: 'center', marginHorizontal: 50},
  getStartedText: {fontSize: 17, color: 'rgba(96,100,109, 1)', lineHeight: 24, textAlign: 'center'}
});
