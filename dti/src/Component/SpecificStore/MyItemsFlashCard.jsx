
import React from 'react';
import axios from 'axios';

const glassEffect = {
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(0,0,0)',
};

const MyItemFlashCard = ({ item, onItemChange, onItemDelete }) => {

    const handlePriceChange = async () => {
        const newPrice = prompt('Enter new price:');
        if (newPrice !== null && newPrice !== '') {
            try {
                const response = await axios.patch(`http://localhost:3002/item`, { itemid: item.itemid, price: newPrice });
                if (response.status === 200) {
                    onItemChange(response.data); 
                }
            } catch (error) {
                console.error('Error updating item price:', error);
            }
        }
    };


    const handleDeleteItem = async () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await onItemDelete(item.itemid);
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };
    return (
        <>    
           <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold" style={glassEffect}>
                <img src={`http://localhost:3002/Images/${item.image}`} alt={item.itemname} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg font-semibold mt-2"> {item.itemname}</h2>
                <p className="text-sm text-gray-600 mt-1">Itemquantity: {item.quantity}</p>
                <p className="text-sm text-gray-600 mt-1">Itemprice: {item.price}</p>
                <div className="mt-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handlePriceChange}>
                        Change Price
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDeleteItem}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default MyItemFlashCard;

