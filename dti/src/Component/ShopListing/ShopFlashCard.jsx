import React from 'react';
import { Link } from 'react-router-dom';

const glassEffect = {
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(0,0,0,0.1)',
};

const ShopFlashCard = ({ shop }) => {
    return (
        <Link to={`/shoplisting/${shop._id}`} >
            <div className="flex flex-col items-center justify-start border rounded-xl p-4 ml-4 mb-4 bg-white shadow-lg font-bold" style={glassEffect}>
                <img src={`http://localhost:3002/Images/${shop.image}`} alt={shop.shopname} className="w-64 h-40 object-cover rounded-lg" />
                <h2 className="text-lg  mt-2">{shop.shopname}</h2>
                <p className="text-sm text-gray-600 mt-1">{shop.address}</p>
                <p className="text-sm text-gray-600 mt-1">{shop.phonenumber}</p>
            </div>
        </Link>
    );
};

export default ShopFlashCard;



                                                                                