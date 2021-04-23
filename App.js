/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Index from './src/routers/index';
import {useDispatch} from 'react-redux';
import {homeAction} from './src/redux/movie/action';

const App = () => {
  const dispatch = useDispatch();
  console.log('homeAction', homeAction);
  React.useEffect(() => {
    dispatch(homeAction.getALLMovies());
  }, []);

  return <Index />;
};

const styles = StyleSheet.create({});

export default App;
