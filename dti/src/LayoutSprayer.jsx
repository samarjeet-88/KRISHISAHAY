import React from 'react'
import RentalNavbar from './Component/Rental/RentalNavbar'
import Sprayers from './Component/Rental/Sprayers'

function LayoutSprayers() {
  return (
    <>
        <div className='bg-neutral-900	min-h-screen'>
            <RentalNavbar/>
            <Sprayers/>
        </div>
    </>
  )
}

export default LayoutSprayers