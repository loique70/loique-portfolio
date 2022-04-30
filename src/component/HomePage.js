import React from 'react'
import Typical from 'react-typical'
import {HiArrowNarrowRight} from 'react-icons/hi'

function HomePage() {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600 text-4xl'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-3xl font-bold text-[#f1f1f1]'>JSCODER</h1>
          <span className='text-pink-600 text-4xl'>
              I am
              {""}
              <h1 className='text-2xl sm:text-3xl font-bold text-[#8892b0]'>
                  {""}
                  <Typical className=""
                    loop ={Infinity}
                    steps = {[
                        "FullStack Devoloper",
                        8000,
                        "MongoDB Conceptor",
                        8000,
                        "Node js Devoloper",
                        8000,
                        "Mern Devoloper",
                        8000,
                        "Vue js Devoloper",
                        8000,
                        "Flutter Devoloper",
                        8000,
                    ]}
                  />
              </h1>
          </span>
          <p className='text-[#8892b0] py-4 max-w-[700px] text-2xl'>
              I'm a full-stack developer specialiwing in building fand occasionnally
              designing exceptional digital experience.
              Currently I'm focused on building responsive full-stack web applications
          </p>
          <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                  View Work 
                  <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3'/>
                  </span>
              </button>
          </div>
      </div>
    </div>
  )
}

export default HomePage
