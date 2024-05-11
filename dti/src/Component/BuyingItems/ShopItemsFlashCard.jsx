import React from 'react';
import { useState } from 'react';

const glassEffect = {
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(0,0,0)',
};

const ShopItemsFlashCard = ({ item }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        const quantityItems=prompt("Enter quantity")
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const newItem = {
            itemid:item.itemid,
            image:item.image,
            itemname: item.itemname,
            quantity: quantityItems,
            price: item.price,
        };
            const updatedCartItems = [...cartItems, newItem];
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

            setIsAddedToCart(true); 
        }


    return (
        <>
        <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold" style={glassEffect}>
            <img src={`http://localhost:3002/Images/${item.image}`} alt={item.itemname} className="w-64 h-40 object-cover rounded-lg" />
            <h2 className="text-lg font-semibold mt-2">Itemname: {item.itemname}</h2>
            <p className="text-sm text-gray-600 mt-1">Itemquantity: {item.quantity}</p>
            <p className="text-sm text-gray-600 mt-1">Itemprice: {item.price}</p>
            <div className="mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleAddToCart}>
                    ADD
                </button>
            </div>
        </div>
        </>
    )
}

export default ShopItemsFlashCard;
