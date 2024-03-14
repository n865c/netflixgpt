import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlaymovies:null,
        trailermovie:null,
        popularmovies:null
    },
    reducers:{
        addNowPlayMovie(state,action){
            state.nowPlaymovies=action.payload;
        },
        addPopularMovie(state,action){
            state.popularmovies=action.payload;
        },
        addtrailer(state,action){
state.trailermovie=action.payload;
        }
    }
})
export const {addNowPlayMovie,addtrailer,addPopularMovie}=movieSlice.actions;
export default movieSlice.reducer;