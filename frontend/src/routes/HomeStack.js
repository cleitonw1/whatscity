import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuButton from '../components/MenuButton';
import Home from '../pages/Home';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Whatscity',
        headerLeft: () => <MenuButton />,
        headerStyle: {
          backgroundColor: '#204051',
        },
        headerTintColor: '#eeeeee',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
