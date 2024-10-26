import React from 'react'
import Search from '../../components/Search'

export default function page() {
  return (
    <div className=' container mx-auto px-4 md:px-8 py-8'>
      <div className='pt-8 text-center text-white'>
      <h1 className='text-xl mb-2 md:text-4xl'>Track Your Consignment</h1>
      <p>Now you can easily track your consignment</p>
      </div>
      <div className='py-8 md:py-20'>
        <Search></Search>
      </div>
    </div>
  )
}
