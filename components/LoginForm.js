import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar} from 'react-native';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    _onButtonPress() {
        let username=this.state.username;
        let password=this.state.password;
        this.props.login();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <TextInput style={styles.input} autoCapitalize='none' onSubmitEditing={() => this.passwordInput.focus()} autoCorrect={false} keyboardType='email-address' returnKeyType='next' placeholder='Email' placeholderTextColor='rgba(225,225,225,0.7)' onChangeText={(text) => this.setState({username: text})} />
                <TextInput style={styles.input} returnKeyType='go' ref={(input)=> this.passwordInput = input} placeholder='Password' placeholderTextColor='rgba(225,225,225,0.7)' secureTextEntry onChangeText={(text) => this.setState({password: text})} />
                <TouchableOpacity style={styles.buttonContainer} onPress={this._onButtonPress.bind(this)}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#FFF'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
        backgroundColor:  '#2980b6',
        color: '#FFF'
    }
   
});

export default LoginForm;