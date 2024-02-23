import React from 'react'

const BodyPart1 = () => {
  return (
      <div className=' bg-black h-[500px] '>
          <hr className='border-4 border-gray-600'/>
          <div className='flex justify-between'>
              <div className='text-white mt-24 ml-24 w-[800px]'>
                  <div className='text-6xl font-extrabold '>Enjoy on your TV</div>
                  <div className='mt-5 text-2xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div> 
              </div>
              <div className=' relative'>
                  
                  <video autoPlay playsInline muted loop className='w-96 mt-20 mr-16'>
                      <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></source>
                  </video>
                  <div className='w-[500px]'>
                  <img  className="absolute top-0 right-16 w-auto "src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" >
                      </img>
                  </div>
              </div>
              
          </div>
        
    </div>
  )
}

export default BodyPart1
