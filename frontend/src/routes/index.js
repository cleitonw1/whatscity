import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Dashboard from './Dashboard';

export default function Routes() {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
  );
}
