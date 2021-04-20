import {combineEpics} from 'redux-observable';
import {getALLMovies, getAllActors, getAllNewMovies} from '../redux/movie/epic';
import {getAllTraller} from '../redux/traller/epic';
const rootEpic = combineEpics(
  getALLMovies,
  getAllTraller,
  getAllActors,
  getAllNewMovies,
);
export default rootEpic;
