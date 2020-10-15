import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  state: {
    email: "",
    displayName: ""
  }


  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <Container>
        <Text>{this.state?.email}</Text>

        <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
          <Text>Signout </Text>
        </TouchableOpacity>
      </Container>

    )
  }

}

const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;

`
