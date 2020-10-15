import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
interface Props {

}

export default function Home({ }: Props): ReactElement {
  return (
    <Container>
      <Text>Hellohhhh</Text>
    </Container>
  )
}
const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;

`
