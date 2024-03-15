import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer=()=>{
    const movies =useSelector((store)=>store.movie);
    return (
    
        <div className="bg-black  ">
            <div className="-mt-40 pb-10">
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlaymovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularmovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedmovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upComingmovies}/>
        </div>
        </div>
    )
}
export default SecondContainer;