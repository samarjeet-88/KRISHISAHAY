import React from 'react'
import CartComponent from './Component/BuyingItems/CartContent'
import DisplayItemNavbar from './Component/BuyingItems/DisplayItemsNavbar'

function LayoutCart() {
  return (
    <>
        <div className="bg-neutral-900 min-h-screen">
            <DisplayItemNavbar/>
            <CartComponent/>
        </div>
    </>
  )
}

export default LayoutCart