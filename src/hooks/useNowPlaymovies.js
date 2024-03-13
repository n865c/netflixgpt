import React ,{ useEffect } from "react"
import { options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addNowPlayMovie } from "../utils/movieSlice";

const useNowPlaymovies=()=>{
    const dispatch=useDispatch();
    const movidata =async()=>{
        const nowplay=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
            const json=await nowplay.json();
            console.log(json.results);
           dispatch(addNowPlayMovie(json.results));
            }
    useEffect(()=>{
        movidata();

    },[])
}
export default useNowPlaymovies;