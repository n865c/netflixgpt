import { IMG_URL } from "../utils/constant";

const MovieCard=({poster})=>{
    // console.log(poster);
    return (
        <>
        <div className="z-40">
<img style={{ width: "200px" }} src={IMG_URL+poster}/>
        </div>
        </>
    )
}
export default MovieCard;