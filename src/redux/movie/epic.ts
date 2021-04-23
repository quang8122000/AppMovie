import {$axios} from '../../configs/api';
import {types, homeAction} from './action';
import {systemAction} from '../systems/action';
import {ofType} from 'redux-observable';

import {catchError, mergeMap} from 'rxjs/operators';
import {act} from 'react-test-renderer';
import moment from 'moment';
import {from} from 'rxjs';

export const getALLMoviess = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_MOVIE),
    mergeMap((act: any) => {
      console.log('payload', act.payload);
      return $axios.api
        .get(
          `/3/discover/movie?api_key=2c4916f2a93252ac7140372c475509c6&primary_release_year=${
            act?.payload?.year || moment().format('YYYY')
          }&sort_by=revenue.desc&page=${act?.payload?.page || 1}`,
        )
        .then((rs: any) => {
          const {data} = rs;
          return homeAction.getALLMoviesSuccess(data);
        })
        .catch((err: any) => {
          return homeAction.getALLMoviesFail(err);
        });
    }),
  );
};
export const getALLMovies = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_MOVIE),
    mergeMap((act: any) => {
      console.log('payload', act.payload);
      return from(
        $axios.api.get(
          `/3/discover/movie?api_key=2c4916f2a93252ac7140372c475509c6&primary_release_year=${
            act?.payload?.year || moment().format('YYYY')
          }&sort_by=revenue.desc&page=${act?.payload?.page || 1}`,
        ),
      ).pipe(
        mergeMap((rs: any) => {
          const {data} = rs;
          return [
            homeAction.getALLMoviesSuccess(data),
            systemAction.setLoading(false),
          ];
        }),
      );
    }),
    catchError(err => {
      return [homeAction.getALLMoviesFail(err)];
    }),
  );
};
export const getAllActors = ($acton: any) => {
  return $acton.pipe(
    ofType(types.GET_All_ACTOR),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          `/3/movie/${act?.payload}/credits?api_key=2c4916f2a93252ac7140372c475509c6&language=en-US`,
        )
        .then((rs: any) => {
          const {data} = rs;
          return homeAction.getAllActorsSuccess(data);
        })
        .catch((err: any) => {
          return homeAction.getAllActorsFail(err);
        });
    }),
  );
};
export const getAllNewMovies = ($acton: any) => {
  return $acton.pipe(
    ofType(types.GET_ALL_NEW_MOVIE),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          '/3/movie/popular?api_key=2c4916f2a93252ac7140372c475509c6&language=en-US&page=1',
        )
        .then((rs: any) => {
          const {data} = rs;
          console.log('Dâta', data);
          return homeAction.getAllNewMoviesSuccess(data);
        })
        .catch((err: any) => {
          return homeAction.getAllNewMoviesFail(err);
        });
    }),
  );
};
