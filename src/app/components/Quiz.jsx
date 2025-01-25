import React from 'react'
import GetStarted from './GetStarted'

const Quiz = () => {
  return (
    <div className='pt-20 mt-20 mb-20 space-y-4 mx-3'>
        <h1 className='text-4xl tracking-wide font-bold text-white'>Got any questions ?</h1>
        <p className='text-gray-300 font-normal tracking-wide text-2xl'>Give our team of friendly international moving experts a call or drop us a note.</p>
        <div className='flex justify-center'>
        <GetStarted/>
        </div>
    </div>
  )
}

export default Quiz