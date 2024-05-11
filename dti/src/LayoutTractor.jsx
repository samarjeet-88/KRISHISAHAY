import React from 'react'
import RentalNavbar from './Component/Rental/RentalNavbar'
import Tractor from './Component/Rental/tractor'

function LayoutTractor() {
  return (
    <>
        <div className='bg-neutral-900	min-h-screen'>
            <RentalNavbar/>
            <Tractor/>
        </div>
    </>
  )
}

export default LayoutTractor