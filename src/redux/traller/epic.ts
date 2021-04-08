import {$axios} from '../../configs/api'
import{trallerAction,types}  from '../traller/action'
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';

export const getAllTraller = ( $action : any) => {
    return $action.pipe(
        ofType(types.GET_ALL_TRALLER),
        mergeMap((act : any) => {
            return $axios.api
            .get('/3/movie/209112/trailers?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
            .then((rs: any)=> {
                const {data} = rs;
                console.log('getAllTraller',data);
                return trallerAction.getALLTrallersSuccess(data);
            })
            .catch((err: any) => {{
                return trallerAction.getALLTrallersFail(err);
            }})
        })
    )
}