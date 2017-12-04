import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, AsyncStorage } from 'react-native';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillMount() {
    this._checkStorage();
  }

  async _checkStorage() {
    let username = await AsyncStorage.getItem('username');
    let password = await AsyncStorage.getItem('password');
    if(username != null && password != null) this.setState({username: username, password: password});
  }

  _onButtonPress() {
    this.props.login(this.state.username, this.state.password);
  }

  _checkError(error) {
    if (error != null) return <Text style={styles.error}>{error}</Text>;
  }

  render() {
    let error = this._checkError(this.props.error);
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <TextInput style={styles.input} autoCapitalize='none' onSubmitEditing={() => this.passwordInput.focus()} autoCorrect={false} underlineColorAndroid='transparent' keyboardType='email-address' returnKeyType='next' placeholder='Email' placeholderTextColor='rgba(210,210,210,1)' onChangeText={(text) => this.setState({username: text})} value={this.state.username} />
        <TextInput style={styles.input} returnKeyType='go' ref={(input)=> this.passwordInput = input} placeholder='Password' placeholderTextColor='rgba(210,210,210,1)' secureTextEntry onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
        {error}
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
  input: {width: '80%', height: 40, backgroundColor: '#FFF', marginBottom: 10, marginLeft: '10%', padding: 10, color: '#000'},
  buttonContainer: {width: '50%', backgroundColor: '#7db434', paddingVertical: 10, paddingHorizontal: 15, marginLeft: '25%'},
  buttonText: {color: '#FFF', textAlign: 'center', fontFamily: 'opensans-semibold', fontSize: 14},
  error: {color: 'red', fontSize: 14, width: '80%', marginLeft: '10%', paddingBottom: 10}
});
