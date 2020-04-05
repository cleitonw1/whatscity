import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BackButton from '../components/BackButton';
import Settings from '../pages/Settings';
const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Configurações',
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
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
