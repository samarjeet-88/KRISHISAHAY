import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const StoreDetail = () => {
  const { id } = useParams(); 
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/store/${id}`);
        setStore(response.data);
        localStorage.setItem('storeId', id);
      } catch (error) {
        console.error('Error fetching store details:', error);
      }
    };

    fetchStore();
  }, [id]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
      <div className="container mx-auto px-4 py-8 ">
      <div className="flex items-center">
        <div className="w-1/2 bg-white h-auto p-8 rounded-lg shadow-lg ml-2">
          <h1 className="text-4xl font-bold mb-4">{store.shopname}</h1>
          <p className="text-lg mb-2">Address: {store.address}</p>
          <p className="text-lg mb-2">State: {store.state}</p>
          <p className="text-lg mb-2">City: {store.city}</p>
          <p className="text-lg mb-2">UPI: {store.upi}</p>
          <p className="text-lg mb-2">GST: {store.gst}</p>
        </div>
        <div className="w-1/2 flex justify-center">
          {store.image && (
            <img src={`http://localhost:3002/Images/${store.image}`} alt={store.shopname} className="max-w-full max-h-80 rounded-lg shadow-lg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
