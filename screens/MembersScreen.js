import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MemberCard from '../components/MemberCard';

export default class MembersScreen extends React.Component {
  static navigationOptions = {
    title: 'Members'
  }

  constructor() {
    super();
    this.state = {
      user: null,
      members: []
    }
  }

  componentDidMount() {
    this._fetchMembers();
  }

  componentWillMount() {
    this.setState({user: this.props.screenProps});
  }

  async _fetchMembers() {
    let response = await fetch(`http://localhost:3000/api/v1/members.json`).then(function(response) {
      return response;
    });
    let responseJson = await response.json();
    this.setState({members: responseJson.members});
  }

  _renderMembers() {
    return this.state.members.map((member) => {
      return <MemberCard member={member} key={member.id} />;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.screenProps.fontLoaded ? (
            <ScrollView style={styles.container}>
              {this._renderMembers()}
            </ScrollView>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#E5E5E5'}
});
