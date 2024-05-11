import React from 'react'
import RentalNavbar from './Component/Rental/RentalNavbar'
import Threshers from './Component/Rental/Threshers'

function LayoutTthreshers() {
  return (
    <>
        <div className='bg-neutral-900	min-h-screen'>
            <RentalNavbar/>
            <Threshers/>
        </div>
    </>
  )
}

export default LayoutTthreshers