import {combineReducers} from 'redux';
import {reducerMovie} from './movie/reducer';
import {reducerTraller} from '../redux/traller/reducer';
import {systemReducer} from './systems/reducer';

export default combineReducers({
  movie: reducerMovie,
  traller: reducerTraller,
  system: systemReducer,
});
