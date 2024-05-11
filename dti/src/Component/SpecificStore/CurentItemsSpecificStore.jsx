
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MyItemFlashCard from './MyItemsFlashCard';

function CurentItems() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/store/${id}`, {
                    withCredentials: true
                });
                const fetchedItems = response.data.items || [];
                const filteredItems = fetchedItems.filter(item => (
                    item.itemid && item.itemname && item.quantity && item.price 
                ));
                setItems(filteredItems);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, [id]);

    const handleItemChange = (updatedItem) => {
        const updatedItems = items.map(item => (item.itemid === updatedItem.itemid ? updatedItem : item));
        setItems(updatedItems);
    };


    const handleItemDelete = async (deletedItemId) => {
        try {
            const response = await axios.delete(`http://localhost:3002/item`, { data: { itemid: deletedItemId } });
            if (response.status === 200) {
                const updatedItems = items.filter(item => item.itemid !== deletedItemId);
                setItems(updatedItems);
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };
    

    return (
        <div className="grid grid-cols-4 mt-3">
            {items.length>0  ? (
                items.map(item => (
                    <MyItemFlashCard
                        key={item.itemid}
                        item={item}
                        onItemChange={handleItemChange}
                        onItemDelete={handleItemDelete}
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

export default CurentItems;

