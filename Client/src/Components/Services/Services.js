import React from 'react'
import AdoptSection from './AdoptSection'
import PostPetSection from './PostPetSection'

const Services = () => {
  return (
    <div className='main-container'>
        <div className='adopt-pet'>
            <AdoptSection/>
        </div>
        <div className='post-pet'>
            <PostPetSection/>
        </div>
    </div>
  )
}

export default Services
