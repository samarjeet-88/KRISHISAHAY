import React from 'react'
import tractor from "../../Pictures/Tractor.jpeg"

function Tractor() {
  return (
    <>
     <div className="grid grid-cols-4 mt-3">
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={tractor} alt={tractor} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">TRACTOR1</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 800</p>
            </div>

            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={tractor} alt={tractor} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">TRACTOR2</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 700</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={tractor} alt={tractor} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">TRACTOR3</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 600</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={tractor} alt={tractor} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">TRACTOR4</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 400</p>
            </div>
    </div>
    </>
  )
}

export default Tractor