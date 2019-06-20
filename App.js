import React, { Component } from 'react';
import { View } from 'react-native';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import { Button,Container,Header,Left,Right,Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeTab from './src/Tabs/HomeTab'; //Tab Nav
import LoginTab from './src/Tabs/LoginTab'; //Stack Nav

const MyDrawerNavigator = createDrawerNavigator({
    HomeTab:{ 
      screen: HomeTab,
      navigationOptions: {
        title: "Home"
    }
   },
    LoginTab: {
      screen: LoginTab,
      navigationOptions: {
        title: "Login"
    }
   },
 });
 
const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component{
    render(){
      return(
        <Container>
          <MyApp >
            </MyApp >
        </Container>
      );
    }
}//End of App class

export default App;