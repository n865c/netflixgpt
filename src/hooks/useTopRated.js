import React ,{ useEffect } from "react"
import { options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addTopRatedMovie } from "../utils/movieSlice";

const useTopRated=()=>{
    const dispatch=useDispatch();
    const movidata =async()=>{
        const nowplay=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
            const json=await nowplay.json();
            console.log(json.results);
           dispatch(addTopRatedMovie(json.results));
            }
    useEffect(()=>{
        movidata();

    },[])
}
export default useTopRated;