import React from "react";

const CartContentFlashCard = ({ item, index, cartItems, handleIncrement, handleDecrement,handleRemoval }) => {
    return (
        <>
            {cartItems[index]?.quantity !== undefined && cartItems[index]?.quantity !== null && cartItems[index]?.quantity !== 0 && (
                <div key={index} className="flex border p-4 bg-white">
                    <img src={`http://localhost:3002/Images/${item.image}`} alt={item.itemname} className="w-50 h-32 object-cover rounded-lg mr-4" />
                    <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-semibold">{item.itemname}</h2>
                        <p>Price per item: ₹{item.price}</p>
                        <h2>Quantity: {cartItems[index]?.quantity || 0}</h2>
                        <p>Total price: ₹{(item.price * (cartItems[index]?.quantity || 0)).toFixed(2)}</p>
                    </div>
                    <div className="mt-2 m-12">
                        <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleIncrement}>
                            +
                        </button>
                        <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleDecrement}>
                            -
                        </button>
                        <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleRemoval}>
                            REMOVE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartContentFlashCard;