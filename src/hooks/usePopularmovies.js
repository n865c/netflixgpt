import React ,{ useEffect } from "react"
import { options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addPopularMovie } from "../utils/movieSlice";

const usePopularmovies=()=>{
    const dispatch=useDispatch();
    const movidata =async()=>{
        const nowplay=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
            const json=await nowplay.json();
            console.log(json);
           dispatch(addPopularMovie(json.results));
            }
    useEffect(()=>{
        movidata();

    },[])
}
export default usePopularmovies;