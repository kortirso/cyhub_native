import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class MemberScreen extends Component {
  _onBackPress() {
    this.props.backPress();
  }

  render() {
    let member = this.props.member;
    return (
      <View style={styles.container}>
        <Text style={styles.textName}>{member.name}</Text>
        <Text style={styles.textDescription}>{member.description}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={this._onBackPress.bind(this)}>
          <Text style={styles.buttonText}>BACK TO MEMBERS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#FFF'},
  textName: {fontFamily: 'oswald-medium', fontSize: 20, fontWeight: '500', color: 'rgba(96,100,109,1)'},
  textDescription: {fontFamily: 'opensans-regular', fontSize: 16, color: 'rgba(96,100,109,1)', lineHeight: 20, marginBottom: 5},
  buttonContainer: {width: '60%', backgroundColor: '#7db434', paddingVertical: 10, paddingHorizontal: 10, marginTop: 15},
  buttonText: {color: '#FFF', textAlign: 'center', fontFamily: 'opensans-semibold', fontSize: 14}
});
