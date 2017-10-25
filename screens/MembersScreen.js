import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class MembersScreen extends React.Component {
  static navigationOptions = {
    title: 'Members'
  }

  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    this.setState({user: this.props.screenProps});
  }

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 15, backgroundColor: '#FFF'}
});
