
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const StoreImage = () => {
  const { id } = useParams(); 
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/store/${id}`);
        setStore(response.data);
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
    <>

        <div className="w-1/2 flex justify-center ml-2">
          {store.image && (
            <img src={`http://localhost:3002/Images/${store.image}`} alt={store.shopname} className="max-w-full h-200 max-h-100 rounded-lg shadow-lg" />
          )}
        </div>

    </>
  );
};

export default StoreImage;
