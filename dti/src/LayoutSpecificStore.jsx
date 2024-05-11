import React from 'react';
import { useParams } from 'react-router-dom';
import NavbarMyStore from './Component/SpecificStore/NavbarSpecificStore';
import StoreDetail from './Component/MyStore/StoreDetail';
// import AddItems from './Component/SpecificStore/CurentItemsSpecificStore';
// import StoreImage from './Component/MyStore/StoreImage';
import CurentItems from './Component/SpecificStore/CurentItemsSpecificStore';

function LayoutSpecificStore() {

  return (
    <div className="bg-neutral-900 min-h-screen">
      <NavbarMyStore />
      <div className="container mx-auto ">
            <StoreDetail />
            <h1 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>YOUR ITEMS</h1>
            <CurentItems/>       
      </div>
    </div>
  );
}

export default LayoutSpecificStore;








