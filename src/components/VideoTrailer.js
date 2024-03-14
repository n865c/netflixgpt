import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer"

const VideoTrailer=({id})=>{
   useTrailer(id);
   const trailer=useSelector((s)=>s.movie.trailermovie);
   console.log(trailer);
    return(
        <>
        <iframe  className="w-screen "height="800" src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&rel=0&controls=0&loop=1"}  title="YouTube video player"></iframe>
        </>
    )
}
export default VideoTrailer;
