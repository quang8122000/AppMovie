

import {combineReducers} from 'redux';
import {reducerMovie} from '../redux/home/reducer'
import {reducerTraller} from '../redux/traller/reducer'

export default combineReducers({
    movie : reducerMovie, 
    traller:reducerTraller,
});
