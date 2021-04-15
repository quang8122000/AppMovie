/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/routers/Home';
import ItemViewMovie from './src/components/itemViewMovie';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/redux/store';
import ModalDetal from './src/screens/Home/ModalDetal';
import ModalCast from './src/screens/Details/modules/Cast/modalCast';
import DetailsScreen from './src/screens/Details/DetailsScreen';
import Test from '../AppMovie/Test';

const app = () => (
  <Provider store={store}>
    {/* <ItemViewMovie
      image={require('./src/assets/images/hardcore.jpg')}
      title={'Hardcore hanry'}
      content={
        'Hey guy nice to meet you . My name is Quang . I am 20 and I am badboy , like smoke and drink beer '
      }
    /> */}
    {/* <DetailsScreen /> */}
    <Home />
    {/* <Home /> */}
    {/* <ModalDetal
      image={require('./src/assets/images/hardcore1.jpg')}
      title={'Hardcore Henry'}
      releasedate={'2016-04-07'}
      starCount={4}
      content={
        'Herry a newly resurrecred cyborg who must save his wife/creator form the cluther'
      }
    /> */}
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;
