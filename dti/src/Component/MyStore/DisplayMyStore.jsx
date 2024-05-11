import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyStoreFlashCard from './MyStoreFlashCard';


function DisplayMyStore() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await axios.get('http://localhost:3002/mystore', {
                    withCredentials: true 
                });
                setShops(response.data);
            } catch (error) {
                console.error('Error fetching shops:', error);
            }
        };

        fetchShops();
    }, []);

    return (
        <div className="grid grid-cols-4 mt-3">
            {shops.map(shop => (
                <MyStoreFlashCard  shop={shop}/>
            ))}
        </div>
    );
}

export default DisplayMyStore




