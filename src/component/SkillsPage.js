/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react'
import html1 from '../assets/html1.png'
import nodejs from '../assets/nodejs.png'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'
import react from '../assets/react.png'
import js1 from '../assets/js1.png'
import css1 from '../assets/css1.png'
function SkillsPage() {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*container*/}
      <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>My techonogy</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html1} alt="html image"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css1} alt="css image"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={js1} alt="js image"/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="react image"/>
                    <p className='my-4'>REACT JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="tailwind image"/>
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={nodejs} alt="nodejs image"/>
                    <p className='py-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={mongodb} alt="mongdb image"/>
                    <p className='py-4'>MONGODB</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default SkillsPage
