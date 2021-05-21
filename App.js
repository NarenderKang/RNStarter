/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {registerScreens} from './src/config/navigation/routes';
import {Provider} from 'react-redux';
import setup, {storeObj} from './src/store/setup';

const store = setup();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.MainContainer}>

       {registerScreens(storeObj.store, Provider)}
      
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer:{
    flex:1
  },
  
});

export default App;
