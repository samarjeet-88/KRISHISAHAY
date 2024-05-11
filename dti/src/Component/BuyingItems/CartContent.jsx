import React, { useState, useEffect } from 'react';
import CartContentFlashCard from './CartContentFlashCard';
import Logo from '../../Pictures/Logo.png';
import axios from 'axios';

const CartComponent = () => {
    const [cartItems, setCartItems] = useState([]);
    const [amount, setAmount] = useState(0); 

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
        calculateTotalPrice(storedCartItems);
    }, []);

    useEffect(() => {
        calculateTotalPrice(cartItems);
    }, [cartItems]); 

    const calculateTotalPrice = (items) => {
        const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
        setAmount(totalPrice);
    };

    const handleIncrement = (index) => {
        const updatedCartItems = [...cartItems];
        const updatedItem = updatedCartItems[index];
        updatedItem.quantity +=1;
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);
    };

    const handleDecrement = (index) => {
        const updatedCartItems = [...cartItems];
        const updatedItem = updatedCartItems[index];

        if (updatedItem.quantity > 0) {
            updatedItem.quantity -= 1;
            if (updatedItem.quantity === 0) {
                updatedCartItems.splice(index, 1);
            }
            setCartItems(updatedCartItems);
            updateLocalStorage(updatedCartItems);
        }
    };

    const handleRemoval = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);
    };

    const updateLocalStorage = (items) => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    const checkoutHandler = async () => {
        try {
            const { data: { key } } = await axios.get("http://localhost:3002/api/getkey", { withCredentials: true });
            const { data: { order } } = await axios.post("http://localhost:3002/api/checkout", { amount });

            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "KRISHISAHAY",
                description: "KRISHISAHAY",
                image: Logo,
                order_id: order.id,
                callback_url: "http://localhost:3002/api/paymentverification",
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#03C04A"
                }
            };

            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.error("Error during checkout:", error);

        }
    };

    return (
        <div className="bg-neutral-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-white">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-lg text-white">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 gap-4">
                            {cartItems.map((item, index) => (
                                <CartContentFlashCard
                                    key={index}
                                    item={item}
                                    index={index}
                                    cartItems={cartItems}
                                    handleIncrement={() => handleIncrement(index)}
                                    handleDecrement={() => handleDecrement(index)}
                                    handleRemoval={() => handleRemoval(index)}
                                />
                            ))}
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-white">Total Price: ₹{amount.toFixed(2)}</h2>
                            <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins' onClick={checkoutHandler}>PAY</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartComponent;
