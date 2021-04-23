import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootEpic from './rootEpic';
import rootReducers from '../redux/rootReducer';
import AsyncStorage from '@react-native-community/async-storage';
import {createWhitelistFilter} from 'redux-persist-transform-filter';

import {createEpicMiddleware} from 'redux-observable';
const movie = createWhitelistFilter('movie', ['allMovie']);
const persistConfig: any = {
  key: 'root',
  // transforms: [movie],
  storage: AsyncStorage,
  blacklist: ['movie', 'loading'],
};
const epicMiddleware = createEpicMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

store.subscribe(() => {
  console.log('state', store.getState());
});
export const persistor = persistStore(store);
export default store;
