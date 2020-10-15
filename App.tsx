import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//This is Screen
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/loadingScreen';
import LoginScreen from './screens/Login';
import Registration from './screens/registration';
import * as firebase from 'firebase';

//Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyByhrZuwGknnaHHkjktHrmopBa7iJuE2Xo",
  authDomain: "react-native-social-app-81d72.firebaseapp.com",
  databaseURL: "https://react-native-social-app-81d72.firebaseio.com",
  projectId: "react-native-social-app-81d72",
  storageBucket: "react-native-social-app-81d72.appspot.com",
  messagingSenderId: "14615700054",
  appId: "1:14615700054:web:822590473281977c9c51f7"
};

firebase.initializeApp(firebaseConfig);



const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Boom"
    },

  },
  Register: Registration

})



export default createAppContainer(

  createStackNavigator({
    Loading: LoadingScreen,
    App: AppStack,
    Login: AuthStack
  },
    {
      initialRouteName: "Loading"
    }
  )
)

