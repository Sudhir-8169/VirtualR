import React from 'react'
import {features} from '../constants'
function FeatureSection() {
  return (
    <div className="mt-20  border-neutral-800 ">
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-lg h-10 text-lg font-medium py-2 px-6 uppercase">
                Features
            </span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
              Easily build {""}
              <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
              your code
              </span> 
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (

            <div key={index} className='w-full sm:1/1 md:w-1/2 lg:w-1/3 '>
              <div className="flex">
                <div className="mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700  rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className='mt-1 mb-4 text-xl'>{feature.text}</h5>
                  <p className='text-md p-2 mb-20 text-neutral-500'>{feature.description}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default FeatureSection