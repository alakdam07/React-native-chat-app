import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
interface Props {

}

export default function Registration({ }: Props): ReactElement {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  )
}
const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;

`
