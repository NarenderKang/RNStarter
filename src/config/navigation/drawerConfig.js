import React, {lazy} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoard from '../../containers/DashBoard';
import Settings from '../../containers/Settings';
import {manageTabNavigation} from './tabConfig';

const Drawer = createDrawerNavigator();

export function manageDrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Tab">
    <Drawer.Screen name="Tab" component={manageTabNavigation} />
  </Drawer.Navigator>

   )}