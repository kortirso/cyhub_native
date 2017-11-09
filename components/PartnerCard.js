import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class PartnerCard extends Component {
  _onPartnerPress() {
    this.props.partnerPress(this.props.partner);
  }

  render() {
    let partner = this.props.partner;
    return (
      <TouchableOpacity style={styles.container} onPress={this._onPartnerPress.bind(this)}>
        <Text style={styles.textName}>{partner.name}</Text>
        <Text style={styles.textLabel}>{partner.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#FFF', borderBottomWidth: 5, borderBottomColor: '#000'},
  textName: {fontFamily: 'oswald-medium', fontSize: 20, fontWeight: '500', color: 'rgba(96,100,109,1)'},
  textLabel: {fontFamily: 'opensans-regular', fontSize: 14, color: 'rgba(96,100,109,1)', lineHeight: 16, marginBottom: 10}
});
