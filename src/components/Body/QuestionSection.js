import React, { useState } from 'react'
import { questions } from '../../utils/constantquestions'
const QuestionSection = () => {
    const [isShow, setShow] = useState(-1);
    const handleToggleAnswer = (index) => {
        if (index === isShow)
            setShow(-1)
        else
            setShow(index);
    };

    return (
    <div className='bg-black '>
            
   
      
           <hr className='border-4 border-gray-600  ' />
          <h1 className='text-5xl font-extrabold mt-14 mb-10 text-center text-white'>Frequently Asked Questions</h1>
          <div className='pb-32' >
              {questions.map((m, i) => {
                  return <div key={i} className='mt-2 text-white bg-black'>
                      <div className='flex bg-gray-700 w-auto p-6 text-2xl mx-60 justify-between hover:bg-gray-500 cursor-pointer ' onClick={() => {
                          handleToggleAnswer(i);
                      }}> <div className=''>{m.query}</div><div >{isShow!==i?"➕":"✖️"}</div></div>
                      
                      {isShow===i?<div className='bg-gray-700 w-auto p-4 text-2xl mx-60 mt-1' >{m.answer}</div>:""}
                  </div>
              })}
          </div> 
        
            </div>
  )
}

export default QuestionSection
