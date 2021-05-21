import React, {lazy} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from '../../containers/DashBoard';
import Settings from '../../containers/Settings';

const Tab = createBottomTabNavigator();

export function manageTabNavigation() {
  return (
        <Tab.Navigator>
        <Tab.Screen name="DashBoard" component={DashBoard} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>

   )}