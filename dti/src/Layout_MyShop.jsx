import React from 'react'
import MyStore from './Component/MyStore/MyStore'
import DisplayMyStore from './Component/MyStore/DisplayMyStore'


function LayoutMyShop(){
    return(
        <>
        <div className='bg-neutral-900 min-h-screen'>
            <div className="grid grid-cols-layout">
                <MyStore/>
                <DisplayMyStore/>
            </div>
        </div>
        </>
    )
}
export default LayoutMyShop