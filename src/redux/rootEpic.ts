import {combineEpics} from 'redux-observable';
import {getALLMovie} from'../redux/home/epic'
import {getAllTraller} from '../redux/traller/epic'
const rootEpic = combineEpics(
    getALLMovie,
    getAllTraller
)
export default rootEpic;