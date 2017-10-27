import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class PartnerCard extends Component {
  render() {
    let partner = this.props.partner;
    return (
      <View style={styles.container}>
        <Text style={styles.textName}>{partner.name}</Text>
        <Text style={styles.textLabel}>{partner.label}</Text>
        <Text style={styles.textDescription}>{partner.description}</Text>
        <Text style={styles.textLink}>{partner.link}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingLeft: 20, paddingRight: 20, marginBottom: 30},
  textName: {fontSize: 18, fontWeight: '500', color: 'rgba(96,100,109,1)', lineHeight: 20},
  textLabel: {fontSize: 14, color: 'rgba(96,100,109,1)', lineHeight: 16, marginBottom: 10},
  textDescription: {fontSize: 16, color: 'rgba(96,100,109,1)', lineHeight: 18, marginBottom: 5},
  textLink: {fontSize: 16, color: 'rgba(96,100,109,1)', lineHeight: 18, marginBottom: 5}
});