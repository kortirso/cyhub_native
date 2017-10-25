import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    _login(username, password) {
        this.props.login(username, password);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.formContainer}>
                    <LoginForm login={this._login.bind(this)} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#2c3e50'},
    loginContainer: {alignItems: 'center', flexGrow: 1, justifyContent: 'center'},
    logo: {position: 'absolute', width: 300, height: 100},
    title: {color: '#FFF', marginTop: 120, width: 180, textAlign: 'center', opacity: 0.9}
});
