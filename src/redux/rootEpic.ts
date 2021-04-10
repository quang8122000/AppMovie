import {combineEpics} from 'redux-observable';
import {getALLMovie} from'../redux/movie/epic'
import {getAllTraller} from '../redux/traller/epic'
import { getAllActors } from './movie/epic';
const rootEpic = combineEpics(
    getALLMovie,
    getAllTraller,
    getAllActors
)
export default rootEpic;