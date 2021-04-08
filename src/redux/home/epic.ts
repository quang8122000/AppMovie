import {$axios} from '../../configs/api'
import {types , homeAction} from './action';
import {ofType} from 'redux-observable';

import {mergeMap} from 'rxjs/operators';

export const getALLMovie = ($action : any ) =>{
    return $action.pipe(
        ofType(types.GET_ALL_MOVIE),
        mergeMap((act: any) => {
          return $axios.api
            .get('/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
            .then((rs: any) => {
              const {data} = rs;
              console.log('getAllMovie', data);
              return homeAction.getALLMoviesSuccess(data);
            })
            .catch((err: any) => {
              return homeAction.getALLMoviesFail(err);
            });
        }),
      );



}




