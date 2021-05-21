import React, {lazy} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../../containers/Auth/SignIn';
import DashBoard from '../../containers/DashBoard';

import {manageTabNavigation} from './tabConfig';
import {manageDrawerNavigation} from './drawerConfig'

//const SignIn = lazy(() => import('../../containers/Auth/SignIn'));
//const Register = lazy(() => import('../../containers/Auth/Register'));
//const DashBoard = lazy(() => import('../../containers/DashBoard'));

const Stack = createStackNavigator();

export const registerScreens = (store, Provider) => {

  
    return (
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={SignIn} options={{title:'Login'}} />
            {/* <Stack.Screen name="Tab" component={manageTabNavigation}  options={{gestureEnabled: true}}  /> */}
            <Stack.Screen name="Tab" component={manageDrawerNavigation}  />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      );

};


