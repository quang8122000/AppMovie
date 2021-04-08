import {createStore , applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist';
import rootEpic from './rootEpic'
import rootReducers from '../redux/rootReducer'
import AsyncStorage from '@react-native-community/async-storage';



import {createEpicMiddleware} from 'redux-observable'
const persistConfig: any = {
    key: 'root',
    transforms: [],
    storage: AsyncStorage,
    timeout: 0,
  };
const epicMiddleware = createEpicMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(  persistedReducer,applyMiddleware(epicMiddleware),
);
epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);
export default store;
