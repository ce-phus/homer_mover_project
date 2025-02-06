import React from 'react'
import GetStarted from './GetStarted'

const Quiz = () => {
  return (
    <div className='pt-10 mb-10 space-y-4 mx-3'>
        <h1 className='text-2xl tracking-wide font-bold'>Connect with Us.</h1>
        <p className='text-gray-700 font-normal tracking-wide text-lg'>Give our team of friendly relocation moving experts a call or drop us a note.</p>
        <div className='flex justify-center'>
        <GetStarted/>
        </div>
    </div>
  )
}

export default Quiz