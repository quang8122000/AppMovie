import {types} from './action';
const initState = {
  allMovie: [],
  allActor: [],
  allNewMovie: [],
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
    case types.GET_All_ACTOR: {
      return {...state, allActor: []};
    }
    case types.GET_All_ACTOR_SUCCESS: {
      return {...state, allActor: payload};
    }
    case types.GET_All_ACTOR_FAIL: {
      return {...state, allActor: payload};
    }
    case types.GET_ALL_NEW_MOVIE: {
      return {...state, allNewMovie: []};
    }
    case types.GET_ALL_NEW_MOVIE_SUCCESS: {
      return {...state, allNewMovie: payload};
    }
    case types.GET_ALL_NEW_MOVIE_FAIL: {
      return {...state, allNewMovie: payload};
    }
  }
  return state;
};
export default reducerMovie;
