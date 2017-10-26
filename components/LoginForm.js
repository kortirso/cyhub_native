import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  _onButtonPress() {
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <TextInput style={styles.input} autoCapitalize='none' onSubmitEditing={() => this.passwordInput.focus()} autoCorrect={false} keyboardType='email-address' returnKeyType='next' placeholder='Email' placeholderTextColor='rgba(210,210,210,1)' onChangeText={(text) => this.setState({username: text})} />
        <TextInput style={styles.input} returnKeyType='go' ref={(input)=> this.passwordInput = input} placeholder='Password' placeholderTextColor='rgba(210,210,210,1)' secureTextEntry onChangeText={(text) => this.setState({password: text})} />
        <TouchableOpacity style={styles.buttonContainer} onPress={this._onButtonPress.bind(this)}>
          {
            this.props.fontLoaded ? (
              <Text style={styles.buttonText}>LOGIN</Text>
            ) : null
          }
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 10, backgroundColor: '#F2F2F2', width: '100%'},
  input: {width: '80%', height: 40, backgroundColor: 'rgba(255,255,255,1)', marginBottom: 10, marginLeft: '10%', padding: 10, color: '#000'},
  buttonContainer: {width: '50%', backgroundColor: '#2980b6', paddingVertical: 15, marginLeft: '25%'},
  buttonText: {color: '#FFF', textAlign: 'center', fontFamily: 'opensans-semibold', fontSize: 16}
});
