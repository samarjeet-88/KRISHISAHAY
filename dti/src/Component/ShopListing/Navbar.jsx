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

export default function Navbar() {

    

  return (
    <>
    <div>
      
    <header className="shadow sticky z-50 top-0">     
            <nav style={glassEffect}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-10 h-20"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2"> 
                    <NavLink to="/compare">
                        <button type="button" className="focus:outline-none text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins">
                                COMPARE ITEMS
                            </button>
                            </NavLink>

                        <NavLink to="/liststorebutton">
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins">
                                LIST STORE
                            </button>
                        </NavLink>
                        <NavLink to="/mystore">
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins">
                                MY STORE
                            </button>
                        </NavLink>
                        <NavLink to="/cart">
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins">
                                CART
                            </button>
                        </NavLink>

                    </div>
                    {/* Other elements (can be adjusted for order) */}
                        {/* <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 ">
                                <li>
                                <input
                                    className="search-input rounded-xl"
                                    type="text"
                                    placeholder="     Search."
                                    style={{ width: "200px" ,height: "40px"}}
                                    />
                                </li>                      
                            </ul>
                        </div> */}
                </div>
            </nav>
        </header>
        
    </div>
    </>
  )
}
