import {$axios} from '../../configs/api';
import {trallerAction, types} from './action';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';

export const getAllTraller = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_TRALLER),
    mergeMap((act: any) => {
      console.log('act', act);
      return $axios.api
        .get(
          `/3/movie/${act?.payload}/trailers?api_key=2c4916f2a93252ac7140372c475509c6`,
        )
        .then((rs: any) => {
          const {data} = rs;
          console.log('getAllTraller', data);
          return trallerAction.getALLTrallersSuccess(data);
        })
        .catch((err: any) => {
          {
            return trallerAction.getALLTrallersFail(err);
          }
        });
    }),
  );
};
