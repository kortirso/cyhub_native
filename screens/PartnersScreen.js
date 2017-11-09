import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PartnerCard from '../components/PartnerCard';
import PartnerScreen from '../components/PartnerScreen';

export default class PartnersScreen extends React.Component {
  static navigationOptions = {
    title: 'Partners'
  }

  constructor() {
    super();
    this.state = {
      user: null,
      partners: [],
      partner: null
    }
  }

  componentDidMount() {
    this._fetchPartners();
  }

  componentWillMount() {
    this.setState({user: this.props.screenProps.user});
  }

  async _fetchPartners() {
    let response = await fetch(`http://localhost:3000/api/v1/partners.json`).then(function(response) {
      return response;
    });
    let responseJson = await response.json();
    this.setState({partners: responseJson.partners});
  }

  _renderPartners() {
    if (this.state.partner == null) {
      return this.state.partners.map((partner) => {
        return <PartnerCard partner={partner} partnerPress={this._onPartnerPress.bind(this)} key={partner.id} />;
      });
    } else {
      return <PartnerScreen partner={this.state.partner} backPress={this._onPartnersBack.bind(this)} /> 
    }
  }

  _onPartnerPress(partner) {
    this.setState({partner: partner});
  }

  _onPartnersBack() {
    this.setState({partner: null});
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.screenProps.fontLoaded ? (
            <ScrollView style={styles.container}>
              {this._renderPartners()}
            </ScrollView>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'}
});
