import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class MemberCard extends Component {
  render() {
    let member = this.props.member;
    return (
      <View style={styles.container}>
        <Text style={styles.textName}>{member.name}</Text>
        <Text style={styles.textDescription}>{member.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#FFF', borderBottomWidth: 5, borderBottomColor: '#000'},
  textName: {fontFamily: 'oswald-medium', fontSize: 20, fontWeight: '500', color: 'rgba(96,100,109,1)'},
  textDescription: {fontFamily: 'opensans-regular', fontSize: 16, color: 'rgba(96,100,109,1)', lineHeight: 18, marginBottom: 5}
});
