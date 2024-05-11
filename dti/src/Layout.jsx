import React from 'react'
import Header from './Component/Header/Header'
import Navbar from './Component/ShopListing/Navbar'
import SideBar from './Component/ShopListing/SideBar'
import DisplayShop from './Component/ShopListing/DisplayShop'


function Layout(){
    return(
        <>
        <div className='bg-neutral-900	min-h-screen'>
        <div className="grid grid-cols-layout">
            <Navbar/>
            <DisplayShop/>
            </div>
        </div>
        </>
    )
}
export default Layout