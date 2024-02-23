import React from 'react'
import ReactPlayer from 'react-player'
const BodyPart3 = () => {
  return (
    <div className='bg-black h-[500px]'>
          <hr className='border-4 border-gray-600' />
          <div className='flex justify-center mb-20'>
              <div className='text-white mt-44 mb-40'>
                  <div className='text-6xl font-extrabold '>Watch everywhere</div>
                  <div className='mt-5 text-2xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
              </div>
              <div className='mr-10 mt-14 relative'>
                 
                  <video autoPlay playsInline muted loop className='w-80 mt-7 ml-20 '>
                      <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"></source>
                  </video>
                  <div className='w-[500px]'>
                  <img  className="absolute top-0 left-0 w-auto"src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png">
                      </img>
                  </div>
              </div>

          </div>

    </div>
  )
}

export default BodyPart3
