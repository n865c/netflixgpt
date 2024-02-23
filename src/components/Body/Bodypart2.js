import React from 'react'

const Bodypart2 = () => {
    return (
        <div className='bg-black '>
            <hr className='border-4 border-gray-600 ' />
            <div className='flex justify-center w-full '>
            
                <div className='ml-32 mt-10 mb-10 w-6/12'>
                   
                    <img className="w-[700px]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                    <div className='bg-black border border-white rounded-lg w-80 h-28  -top-24 relative left-28 flex ' >
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='p-4' />
                        <div className='m-5'>
                            <div className='text-white'>Stranger Things</div>
                            <div className='text-blue-600'>Downloading...</div>
                        </div>
                        <img className='w-16 h-14 m-7' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" />
                    </div>
                </div>
        
                <div className='text-white mt-52 mr-16 w-8/12'>
                    <div className='text-6xl font-extrabold '>Download your shows to watch offline</div>
                    <div className='mt-5 text-2xl'>Save your favourites easily and always have something to watch.</div>
                </div>
                </div>
            

        </div>
    )
}

export default Bodypart2
