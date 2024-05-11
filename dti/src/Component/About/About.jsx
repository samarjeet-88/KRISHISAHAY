import React from "react";
import backsignin from '../../Pictures/Shopbg2.jpg';


function About(){

    const fullScreenImageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh', 
        objectFit: 'cover',
    };
    
    const glassEffect = {
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
    };
    return(
        <>
        <div className='flex flex-col justify-center items-center w-full h-screen bg-slate-500'>
                <img
                    src={backsignin}
                    alt="Background"
                    style={fullScreenImageStyle}
                />
                <div className='w-full h-full flex items-center justify-center '>
                    <div className='bg-white bg-opacity-40 p-10 md:p-16 lg:p-20 rounded-3xl border-2 border-gray h-21/27 w-3/4 ' style={glassEffect}>
                        <h1 className='text-3xl font-semibold font-poppins mt-0 mb-4 p-0'>Krishi Sahay is our idea for a web-based farmer’s portal. Our motive is to provide support to agricultural workers across the country. The platform will allow them access to market intel, expert advice on crop management, the latest information about government schemes and subsidies, weather forecasts and other updates. Our vision is to help farmers make the most out of their resources with the help of modern technology, help them increase their crop yield, and prevent their exploitation by middlemen, thus raising their living standards.</h1>
                          <h2 className='text-3xl font-semibold font-poppins mt-0 mb-4 p-0 text-red-700'>  Team Members: 
                                1)	Samarjeet Santosh Choudhary (E22CSEU1152) 
                                2)	Akshat Jain (E22CSEU1558)
                                </h2> 
                        
                    </div>
                </div>
        </div>
        </>
    )
}

export default About