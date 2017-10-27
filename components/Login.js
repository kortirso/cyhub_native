import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  _login(username, password) {
    this.props.login(username, password);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.loginContainer}>
          <Image source={require('../assets/images/cyhub-icon-full.png')} style={styles.welcomeImage} />
          <LoginForm login={this._login.bind(this)} fontLoaded={this.props.fontLoaded} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F2F2F2'},
  welcomeImage: {width: 250, resizeMode: 'contain'},
  loginContainer: {alignItems: 'center', flexGrow: 1, justifyContent: 'center'}
});
