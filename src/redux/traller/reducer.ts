import {types} from './action';
const initState = {
  allTraller: [],
};
export const reducerTraller: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_TRALLER: {
      console.log('GET_ALL_TRALLER');

      return {...state, allTraller: []};
    }
    case types.GET_ALL_TRALLER_SUCCESS: {
      return {...state, allTraller: payload};
    }
    case types.GET_ALL_TRALLER_FAIL: {
      return {...state, allTraller: payload};
    }
  }
  return state;
};
export default reducerTraller;
