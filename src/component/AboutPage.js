/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import about from '../assets/about.jpg'

function AboutPage() {
  return (
    <section className='w-full h-full bg-[#0a192f] text-white'>
      <div className='max-w-[1000px]  mx-auto p-4  flex-col justify-center'>
        <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>About Me</h2>
        {/* <p className='py-4'>Introduce myself</p> */}
      </div>
      <div className='max-w-[1000px] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 w-full h-full'>
        <div className='w-full  grid grid-cols-2'>
          <img className='shadow-md shadow-[#040c16] rounded' src={about} alt="about image"/>
        </div>
        <div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center'>
            <div className='p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <span>10+</span>
              <span> year <br/> Experience</span>
            </div>
            <div className='p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <span>20+</span>
              <span> Completed <br/> Project</span>
            </div>
            <div className='p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <span>20+</span>
              <span> Completed <br/> Project</span>
            </div>
            <div className='p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <span>20+</span>
              <span> Completed <br/> Project</span>
            </div>
          </div>
          <div className=''>
            <p>I am a new Devoloper based in cameroon</p>
          </div>
          <div className='p-2'>
            <button className='group border-2 px-2 py-1 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              <a download="hhh" href='#'>Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
