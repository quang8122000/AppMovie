import {$axios} from '../../configs/api'
import {types , homeAction} from './action';
import {ofType} from 'redux-observable';

import {mergeMap} from 'rxjs/operators';
import { act } from 'react-test-renderer';

export const getALLMovie = ($action : any ) =>{
    return $action.pipe(
        ofType(types.GET_ALL_MOVIE),
        mergeMap((act: any) => {
          return $axios.api
            .get(`/3/discover/movie?api_key=2c4916f2a93252ac7140372c475509c6&primary_release_year=${act?.payload}&sort_by=revenue.desc`)
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
export const getAllActors = ($acton : any) =>{
  return $acton.pipe(
    ofType(types.GET_All_ACTOR),
    mergeMap((act: any) => {
      return $axios.api
      .get('/3/movie/527774/credits?api_key=2c4916f2a93252ac7140372c475509c6&language=en-US')
      .then((rs : any)=>{
        const {data} = rs;
        console.log('getALLActor', data);
        return  homeAction.getALLMoviesSuccess(data);

      })
      .catch((err : any) =>{
        return homeAction.getAllActorsFail(err);
    });
   
    }),
  )
}




