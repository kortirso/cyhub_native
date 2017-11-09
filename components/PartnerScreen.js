import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class PartnerScreen extends Component {
  _onBackPress() {
    this.props.backPress();
  }

  render() {
    let partner = this.props.partner;
    return (
      <View style={styles.container}>
        <Text style={styles.textName}>{partner.name}</Text>
        <Text style={styles.textLabel}>{partner.label}</Text>
        <Text style={styles.textDescription}>{partner.description}</Text>
        <Text style={styles.textLink}>{partner.link}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={this._onBackPress.bind(this)}>
          <Text style={styles.buttonText}>BACK TO PARTNERS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#FFF'},
  textName: {fontFamily: 'oswald-medium', fontSize: 20, fontWeight: '500', color: 'rgba(96,100,109,1)'},
  textLabel: {fontFamily: 'opensans-regular', fontSize: 14, color: 'rgba(96,100,109,1)', lineHeight: 16, marginBottom: 10},
  textDescription: {fontFamily: 'opensans-regular', fontSize: 16, color: 'rgba(96,100,109,1)', lineHeight: 18, marginBottom: 5},
  textLink: {fontFamily: 'opensans-regular', fontSize: 16, color: 'rgba(96,100,109,1)', lineHeight: 18},
  buttonContainer: {width: '50%', backgroundColor: '#7db434', paddingVertical: 10, paddingHorizontal: 15, marginTop: 15},
  buttonText: {color: '#FFF', textAlign: 'center', fontFamily: 'opensans-semibold', fontSize: 14}
});
