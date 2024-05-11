import React from 'react'
import CompareItem from './Component/Compare/CompareItem'
import DisplayItemNavbar from './Component/BuyingItems/DisplayItemsNavbar'

function LayoutCompare() {
  return (
    <>
        <div className="bg-neutral-900 min-h-screen">
            <DisplayItemNavbar/>
            <CompareItem/>
        </div>
    </>
  )
}

export default LayoutCompare