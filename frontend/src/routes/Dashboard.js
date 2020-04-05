import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import SettingsStack from './SettingsStack';

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerType="front"
      drawerContentOptions={{
        activeTintColor: '#84a9ac',
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{drawerLabel: 'Início'}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{drawerLabel: 'Configurações'}}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{drawerLabel: 'Sobre'}}
      />
    </Drawer.Navigator>
  );
}
