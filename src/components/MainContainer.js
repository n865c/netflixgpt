import React from "react";
import { useSelector } from "react-redux";
import useNowPlaymovies from "../hooks/useNowPlaymovies";
import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";
const MainContainer=()=>{
    useNowPlaymovies();
    
    const movie=useSelector((store)=>store.movie.nowPlaymovies);
    if(!movie)
    return null;
    const {
        original_title,id,
        overview
        }=movie[0];
    return (
        <>
<VideoTitle title={original_title} id={id} des={overview}/>
    <VideoTrailer id={id}/>
        </>
    )
}
export default MainContainer;