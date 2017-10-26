import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import Login from './components/Login';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    isLoadingComplete: false,
    logged: false,
    user: null
  };

  async componentDidMount() {
    await Font.loadAsync({
      'opensans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'opensans-semibold': require('./assets/fonts/OpenSans-Semibold.ttf'),
      'oswald-light': require('./assets/fonts/Oswald-Light.ttf'),
      'oswald-regular': require('./assets/fonts/Oswald-Regular.ttf'),
      'oswald-medium': require('./assets/fonts/Oswald-Medium.ttf'),
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
    });
    this.setState({fontLoaded: true});
  }

  _checkLogged() {
    if (this.state.logged) {
      return <RootNavigation user={this.state.user} />;
    } else {
      return <Login login={this._login.bind(this)} fontLoaded={this.state.fontLoaded} />;
    }
  }

  async _login(username, password) {
    let response = await fetch(`http://localhost:3000/api/v1/users/me.json?email=${username}&password=${password}`).then(function(response) {
      return response;
    });
    let responseJson = await response.json();
    if (response.status == 200) this.setState({logged: true, user: responseJson.user});
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinishLoading} />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            {this._checkLogged()}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('./assets/images/robot-dev.png'), require('./assets/images/robot-prod.png'),]),
      Font.loadAsync([
        Ionicons.font
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  statusBarUnderlay: {height: 24, backgroundColor: 'rgba(0,0,0,0.2)'},
});
