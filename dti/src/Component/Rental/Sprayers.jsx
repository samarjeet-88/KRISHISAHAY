import React from 'react'
import sprayers from "../../Pictures/sprayers.jpeg"


function Sprayers() {
  return (
    <>
     <div className="grid grid-cols-4 mt-3">
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={sprayers} alt={sprayers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">SPRAYER1</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 20</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={sprayers} alt={sprayers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">SPRAYER2</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 50</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={sprayers} alt={sprayers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">SPRAYER3</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 40</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={sprayers} alt={sprayers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">SPRAYER4</h2>
                <p className="text-sm text-gray-600 mt-1">Price per item: 80</p>
            </div>
    </div>

    </>
  )
}

export default Sprayers