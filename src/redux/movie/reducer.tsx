import {types} from './action';
const initState = {
  allMovie: [],
  allActor: [],
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
  }
  return state;
};
export default reducerMovie;
