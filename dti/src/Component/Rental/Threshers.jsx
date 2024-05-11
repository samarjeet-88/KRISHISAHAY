import React from 'react'
import threshers from "../../Pictures/Threshers.jpeg"


function Threshers() {
  return (
    <>
     <div className="grid grid-cols-4 mt-3">
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={threshers} alt={threshers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">THRESHERS1</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 300</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={threshers} alt={threshers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">THRESHERS2</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 400</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={threshers} alt={threshers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">THRESHERS3</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 200</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={threshers} alt={threshers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">THRESHERS4</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 100</p>
            </div>
    </div>

    </>
  )
}

export default Threshers