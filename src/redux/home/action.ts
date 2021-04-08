export const types ={
    GET_ALL_MOVIE : 'GET_ALL_MOVIE',
    GET_ALL_MOVIE_SUCCESS:'GET_ALL_MOVIE_SUCCESS',
    GET_ALL_MOVIE_FAIL:'GET_ALL_MOVIE_FAIL'
}
const action = (type: string, payload?: any) => ({type, payload});

export const homeAction ={
    getALLMovies: (payLoad: any) => action(types.GET_ALL_MOVIE,payLoad),
    getALLMoviesSuccess: (payload: any) =>
    action(types.GET_ALL_MOVIE_SUCCESS, payload),
    getALLMoviesFail: (payload: any) => action(types.GET_ALL_MOVIE_FAIL, payload),
}