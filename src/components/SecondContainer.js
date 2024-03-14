import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer=()=>{
    const movies =useSelector((store)=>store.movie);
    return (
    
        <div className="bg-black">
            <div className="-mt-36">
        <MovieList title={"Now Playing"} movies={movies.nowPlaymovies}/>
        <MovieList title={"Popular movies"} movies={movies.popularmovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlaymovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlaymovies}/>
        </div>
        </div>
    )
}
export default SecondContainer;