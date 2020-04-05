import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BackButton from '../components/BackButton';
import About from '../pages/About';
const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Sobre',
        headerLeft: () => <BackButton />,
        headerStyle: {
          backgroundColor: '#204051',
        },
        headerTintColor: '#eeeeee',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
