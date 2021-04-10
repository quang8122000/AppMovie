

import {combineReducers} from 'redux';
import {reducerMovie} from './movie/reducer'
import {reducerTraller} from '../redux/traller/reducer'

export default combineReducers({
    movie : reducerMovie, 
    traller:reducerTraller,
});
