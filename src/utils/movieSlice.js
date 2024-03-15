import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlaymovies:null,
        trailermovie:null,
        popularmovies:null,
        topRatedmovies:null,
        upComingmovies:null,
    },
    reducers:{
        addNowPlayMovie(state,action){
            state.nowPlaymovies=action.payload;
        },
        addPopularMovie(state,action){
            state.popularmovies=action.payload;
        },
        addTopRatedMovie(state,action)
        {
state.topRatedmovies=action.payload;
        },
        addUpcomingMovie(state,action)
        {
            state.upComingmovies=action.payload
        },
        addtrailer(state,action){
state.trailermovie=action.payload;
        }
    }
})
export const {addNowPlayMovie,addtrailer,addPopularMovie,addTopRatedMovie,addUpcomingMovie}=movieSlice.actions;
export default movieSlice.reducer;