import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    // console.log(movies);
    return (
        <div className="mx-4 p-2 text-white ">
            {title}
            <div className="flex  gap-3  ">
            {movies?.map((m)=>{
               return <div key={m.id} className=""> <MovieCard  poster={m.poster_path}/>
               </div>
            })}
            </div>
        </div>
    )
}
export default MovieList;