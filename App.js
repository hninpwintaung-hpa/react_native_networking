import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack"

import Newpatient from './screens/Newpatient'
import Patients from './screens/Patients'
import check from './screens/check'

export default class App extends React.Component{

  render(){

     const MyStack=createStackNavigator({
       check:{
         screen:check
       },
       Newpatient:{
           screen:Newpatient
       },
       Patients:{
         screen:Patients
       }
     },{
       initialRouteName:"check",
       defaultNavigationOptions:{
         header:null
       }
     })

     const AppContainer=createAppContainer(MyStack)
    return(<AppContainer></AppContainer>)
  }
}