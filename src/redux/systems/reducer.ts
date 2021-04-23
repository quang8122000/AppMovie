import {types} from './action';
const initState = {
  loading: true,
};
export const systemReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.SET_LOADING:
      console.log('SET_LOADING', payload);
      return {...state, loading: payload};

    default:
      return state;
  }
};
