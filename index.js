/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/routers/Home';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/redux/store';

const app = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;
