import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'

function Dashboard() {
  return (
    <div className='p-10'>
        <h2 className='font-bold text-2xl'>Dashboard</h2>
        <h2 className='text-gray-500'>Start your AI Interview</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview></AddNewInterview>
        </div>
    </div>
  )
}

/*<div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview/>
      </div>*/
export default Dashboard