import React from 'react'
// import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link, useNavigate, NavLink } from 'react-router-dom';
import Logo from '../../Pictures/Logo.png';

const glassEffect = {
    background: 'rgba(0,0,0)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(0,0,0)',
    width: '100%', 
    height: '78px', 
  };

export default function RentalNavbar() {

    

  return (
    <>
    <div>
      
    <header className="shadow sticky z-50 top-0">     
            <nav style={glassEffect}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-10 h-20"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex items-center lg:order-2"> 
                    
                        <NavLink to="/cart">
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins">
                                CART
                            </button>
                        </NavLink>

                    </div>
                    
                </div>
            </nav>
        </header>
        
    </div>
    </>
  )
}
