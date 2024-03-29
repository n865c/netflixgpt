import { useEffect } from "react"
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addtrailer } from "../utils/movieSlice";

const useTrailer=(id)=>{
    const dispatch=useDispatch();
    const trailerdata=async()=>{
        const fetchdata=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos", options);
        const json=await fetchdata.json();
        console.log(json);
        const movietrailer= json.results;
        let filtermovie = movietrailer.find((f)=>f.type==="Trailer");
        if(filtermovie===undefined)
          filtermovie=movietrailer[0];  
         dispatch(addtrailer(filtermovie));
    }
    useEffect(()=>{
trailerdata();
    },[])
}
export default useTrailer;