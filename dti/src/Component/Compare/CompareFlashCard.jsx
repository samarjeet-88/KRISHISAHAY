import React from "react"

function CompareFlashCard({item}){
    return(
        <>
        <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold" >
                    <img src={`http://localhost:3002/Images/${item.image}`} alt={item.itemname} className="w-64 h-40 object-cover rounded-lg" />
                    <h2 className="text-lg font-semibold mt-2">{item.itemname}</h2>
                    <p className="text-sm text-gray-600 mt-1">Price: {item.price}</p>
                </div>
        </>
    )
}
export default CompareFlashCard;
