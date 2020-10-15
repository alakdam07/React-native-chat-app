import React, { ReactElement, useState, Component } from 'react';
import styled from 'styled-components';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

interface Props {

}

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errorMessage: null
    }
  }

  handleSignUp = () => {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        });
      })
      .catch(error => this.setState({ errorMessage: error.message }))

    this.setState({
      name: "",
      email: "",
      password: "",
    })
  }
  render() {
    return (
      <Container>
        <Greeting >{`Hello again. \nWelcome Back`}</Greeting>
        <ErrorMessageContainer >
          {this.state.errorMessage && <ErrorMessage >{this.state.errorMessage} </ErrorMessage>}
        </ErrorMessageContainer>
        <Form style={{ marginHorizontal: 30 }}>
          <View style={{ marginTop: 32 }}>
            <InputTitle>
              Full Name
            </InputTitle>
            <Input
              autoCapitalize="none"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}

            ></Input>
          </View>
          <View style={{ marginTop: 32 }}>
            <InputTitle>
              Email Address
            </InputTitle>
            <Input
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></Input>
          </View>
          <View style={{ marginTop: 32 }}>
            <InputTitle>
              password
            </InputTitle>
            <Input
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}

            ></Input>
          </View>
        </Form>
        <SubmitButton style={{ marginHorizontal: 30 }}
          onPress={this.handleSignUp}
        >
          <ButtonText>
            Register biatch
        </ButtonText>
        </SubmitButton>
        <TouchableOpacity
          style={{ marginTop: 30, alignItems: "center" }}
        >
          <ButtonText style={{ color: "black", fontSize: 15 }}>
            New to Social App?
          <Text style={{ fontWeight: "500", color: "#E9446A" }}> Login</Text>
          </ButtonText>
        </TouchableOpacity>
      </Container>

    )
  }
}
export default Registration;


const Container = styled.View`
  flex:1;

`

const Greeting = styled.Text`
  margin-top: 30px;
  font-weight: 400;
  text-align: center;
  font-size: 20px
`

const ErrorMessageContainer = styled.View`
  height: 72px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

`


const ErrorMessage = styled.Text`
  font-weight: 500;
  color: red;
  font-size: 15px;
`

const Form = styled.View`
  margin-bottom: 48px;
`;
const InputTitle = styled.Text`
  color: #8a8f9e;
  font-size: 10px;
  text-transform: uppercase;
`

const Input = styled.TextInput`
  border-bottom-color: #8a8f9e;
  border-bottom-width: 0.5px;
  height: 40px;
  font-size: 15px;
  color: black;
`
const SubmitButton = styled.TouchableOpacity`
  background-color: #00203FFF;
  height: 52px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

`;
const ButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
`
