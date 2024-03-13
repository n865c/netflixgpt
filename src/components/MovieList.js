import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    console.log(movies);
    return (
        <div className="mx-4 p-2 text-white">
            {title}
            <div className="flex  gap-3 overflow-x-scroll ">
            {movies?.map((m)=>{
               return <MovieCard key={m.id} poster={m.poster_path}/>
            })}
            </div>
        </div>
    )
}
export default MovieList;