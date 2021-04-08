import {types} from '../home/action';
const initState = {
  allMovie: [],
};

export const reducerMovie: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_MOVIE: {
      return {...state, allMovie: []};
    }
    case types.GET_ALL_MOVIE_SUCCESS: {
      return {...state, allMovie: payload};
    }
    case types.GET_ALL_MOVIE_FAIL: {
      return {...state, allMovie: payload};
    }
  }
  return state;
};
export default reducerMovie;
