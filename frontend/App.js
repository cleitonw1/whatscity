import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#204051" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

//Color pallet
//#204051
//#3b6978
//#84a9ac
//#cae8d5
//#eeeeee
