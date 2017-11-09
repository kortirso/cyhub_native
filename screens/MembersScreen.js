import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MemberCard from '../components/MemberCard';
import MemberScreen from '../components/MemberScreen';

export default class MembersScreen extends React.Component {
  static navigationOptions = {
    title: 'Members'
  }

  constructor() {
    super();
    this.state = {
      user: null,
      members: [],
      member: null
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
    if (this.state.member == null) {
      return this.state.members.map((member) => {
        return <MemberCard member={member} memberPress={this._onMemberPress.bind(this)} key={member.id} />;
      });
    } else {
      return <MemberScreen member={this.state.member} backPress={this._onMembersBack.bind(this)} />
    }
  }

  _onMemberPress(member) {
    this.setState({member: member});
  }

  _onMembersBack() {
    this.setState({member: null});
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
  container: {flex: 1, backgroundColor: '#FFF'}
});
