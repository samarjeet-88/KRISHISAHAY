import React, { useEffect } from 'react';

const PaymentSuccess = () => {
  useEffect(() => {
    localStorage.removeItem('cartItems');
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Payment Successful</h1>
      <p className="text-lg text-gray-800">Your order has been successfully processed.</p>
      <p className="text-lg text-gray-800">Your cart is now empty.</p>

    </div>
  );
};

export default PaymentSuccess;
