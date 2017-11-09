import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class MemberCard extends Component {
  _onMemberPress() {
    this.props.memberPress(this.props.member);
  }

  render() {
    let member = this.props.member;
    return (
      <TouchableOpacity style={styles.container} onPress={this._onMemberPress.bind(this)}>
        <Text style={styles.textName}>{member.name}</Text>
        <Text style={styles.textLabel}>{member.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: '#FFF', borderBottomWidth: 5, borderBottomColor: '#000'},
  textName: {fontFamily: 'oswald-medium', fontSize: 20, fontWeight: '500', color: 'rgba(96,100,109,1)'},
  textLabel: {fontFamily: 'opensans-regular', fontSize: 14, color: 'rgba(96,100,109,1)', lineHeight: 16, marginBottom: 10}
});
