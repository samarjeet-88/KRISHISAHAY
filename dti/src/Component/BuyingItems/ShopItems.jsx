// ShopItems.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ShopItemsFlashCard from './ShopItemsFlashCard';

function ShopItems() {
    const [items, setItems] = useState([]);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/shoplisting/${id}`, {
                    withCredentials: true
                });
                const fetchedItems = response.data.items || [];
                const filteredItems = fetchedItems.filter(item => (
                    item.itemid && item.itemname && item.quantity && item.price 
                ));
                setItems(filteredItems);
            } 
             catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, [id]);

    return (
        <div className="grid grid-cols-4 mt-3">
            {items.length > 0 ? (
                items.map(item => (
                    <ShopItemsFlashCard
                        key={item.itemid}
                        item={item}
                    />
                ))
            ) : (
                <p className="text-white text-center w-full col-span-4 mt-4">
                    No items available in this shop.
                </p>
            )}
        </div>
    );
}

export default ShopItems;
