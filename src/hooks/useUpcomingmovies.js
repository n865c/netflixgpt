import React ,{ useEffect } from "react"
import { options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addUpcomingMovie } from "../utils/movieSlice";

const useUpcomingmovies=()=>{
    const dispatch=useDispatch();
    const movidata =async()=>{
        const nowplay=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
            const json=await nowplay.json();
            console.log(json.results);
           dispatch(addUpcomingMovie(json.results));
            }
    useEffect(()=>{
        movidata();

    },[])
}
export default useUpcomingmovies;