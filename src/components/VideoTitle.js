const VideoTitle=({title,des,id})=>{
    return (
        <>
        <div className="absolute bg-gradient-to-l from-black text-white w-screen aspect-video ml-20 ">
            <div className="w-96">
            <div className="mt-72 font-bold text-5xl mb-4">{title}</div> 
       <div className=" text-lg font-semibold mb-4"> {des}</div>
       <div className="flex gap-2">
       <button className="bg-white rounded-md py-2 text-black w-28">Play</button>
       <button className="bg-slate-600 rounded-md py-2 text-white w-28">More Info</button>
       </div>
            </div>
       
        </div>
        </>
    )
}
export default VideoTitle;