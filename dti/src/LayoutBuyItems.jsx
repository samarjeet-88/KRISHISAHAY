import React from 'react'
import ShopItems from './Component/BuyingItems/ShopItems'
import Navbar from './Component/ShopListing/Navbar'

function LayoutBuyItems(){
    return(
        <>
        <div className="bg-neutral-900 min-h-screen">
            <Navbar/>
            <ShopItems/>
            </div>
        </>
    )
}

export default LayoutBuyItems