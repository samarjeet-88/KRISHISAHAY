import React from 'react'
import tractor from "../../Pictures/Tractor.jpeg"
import threshers from "../../Pictures/Threshers.jpeg"
import sprayers from "../../Pictures/sprayers.jpeg"
import seeddrill from "../../Pictures/seed_drill.jpeg"
import rotavatore from "../../Pictures/Rotavators.jpeg"
import plogh from "../../Pictures/Ploghs.jpeg"
import planter from "../../Pictures/planters.jpeg"
import { Link } from 'react-router-dom'

function Rental() {
  return (
    <>
        <div className="grid grid-cols-4 mt-3">
            <Link to="/tractor">
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={tractor} alt={tractor} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">TRACTOR</h2>
                <p className="text-sm text-gray-600 mt-1">7499937987</p>
            </div>
            </Link>
            <Link to="/threshers">
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={threshers} alt={threshers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">THRESHERS</h2>
                <p className="text-sm text-gray-600 mt-1">8668699288</p>  
            </div>
            </Link>
            <Link to="/sprayer">
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={sprayers} alt={sprayers} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">SPRAYERS</h2>
                <p className="text-sm text-gray-600 mt-1">7017108888</p>
            </div>
            </Link>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={seeddrill} alt={seeddrill} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">SEEDDRILL</h2>
                <p className="text-sm text-gray-600 mt-1">6397114454</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={rotavatore} alt={rotavatore} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">ROTAVATORE</h2>
                <p className="text-sm text-gray-600 mt-1">7074629868</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={plogh} alt={plogh} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">PLOGH</h2>
                <p className="text-sm text-gray-600 mt-1">7562893850</p>
            </div>
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold">
                <img src={planter} alt={planter} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">PLANTER</h2>
                <p className="text-sm text-gray-600 mt-1">8956308932</p>
            </div>
        </div>
    </>
  )
}

export default Rental