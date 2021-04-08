export const types ={
    GET_ALL_TRALLER : 'GET_ALL_TRALLER',
    GET_ALL_TRALLER_SUCCESS:'GET_ALL_TRALLER_SUCCESS',
    GET_ALL_TRALLER_FAIL:'GET_ALL_TRALLER_FAIL'
}
const action = (type: string, payload?: any) => ({type, payload});

export const trallerAction ={
    getALLTrallers: (payLoad: any) => action(types.GET_ALL_TRALLER,payLoad),
    getALLTrallersSuccess: (payload: any) =>
    action(types.GET_ALL_TRALLER_SUCCESS, payload),
    getALLTrallersFail: (payload: any) => action(types.GET_ALL_TRALLER_FAIL, payload),
}