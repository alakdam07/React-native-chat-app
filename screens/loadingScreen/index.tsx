import React, { ReactElementm, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import firebase from 'firebase';
interface Props {

}

export default function Loading({ navigation }: Props): ReactElement {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      navigation.navigate(user ? "App" : "Login")
    })
  }, [])
  return (
    <Container>
      <Text>Hellodddddd</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </Container>
  )
}
const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;

`
