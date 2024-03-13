import { IMG_URL } from "../utils/constant";

const MovieCard=({poster})=>{
    console.log(poster);
    return (
        <>
        <div className="">
<img  className="w-96"src={IMG_URL+poster}/>
        </div>
        </>
    )
}
export default MovieCard;