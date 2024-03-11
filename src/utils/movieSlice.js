import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlaymovies:null,
        trailermovie:null,
    },
    reducers:{
        addNowPlayMovie(state,action){
            state.nowPlaymovies=action.payload;
        },
        addtrailer(state,action){
state.trailermovie=action.payload;
        }
    }
})
export const {addNowPlayMovie,addtrailer}=movieSlice.actions;
export default movieSlice.reducer;