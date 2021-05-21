import AsyncStorage from '@react-native-community/async-storage';
import array from './array';
import thunk from 'redux-thunk';
import promise from './promise';
import * as reducers from '../reducers';
import whitelist from './whitelist';
import {logger} from 'redux-logger';
import { REHYDRATE, PURGE, persistCombineReducers,persistStore } from 'redux-persist'
import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
export const storeObj = {};
export default function setup() {
  const isDev = global.isDebuggingInChrome || __DEV__;
  const config = {
     key: 'primary',
     storage: AsyncStorage,
     whitelist
     }

     let reducer = persistCombineReducers(config, reducers)
  const middleware = [
    applyMiddleware(...[thunk, promise, array, logger]),
  ];
  if (isDev) {
    middleware.push(applyMiddleware(logger));
  }
  
  const store = createStore(reducer, {}, compose(...middleware));
  if (global.isDebuggingInChrome) {
    window.store = store;
  }
  persistStore(store, {}, () => {
   
  });
  storeObj.store = store;
  return store;
}
