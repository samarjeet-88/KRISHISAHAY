import React from 'react'
import Rental from './Component/Rental/Rental'
import RentalNavbar from './Component/Rental/RentalNavbar'

function LayoutRental() {
  return (
    <>
        <div className='bg-neutral-900	min-h-screen'>
            <RentalNavbar/>
            <Rental/>
        </div>
    </>
  )
}

export default LayoutRental