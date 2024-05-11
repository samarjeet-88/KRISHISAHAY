import React from "react";
import backsignin from '../../Pictures/Shopbg3.jpg';


function Acknowledgement(){
    const fullScreenImageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh', // Adjusted height
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
                        <h1 className="text-2xl font-semibold font-poppins mt-0 mb-4 p-0">We would like to express our deepest gratitude to our mentor for their unwavering support and guidance throughout the development of this web application. Your insights and expertise have been invaluable in shaping the project and pushing it towards excellence.
                        We are also immensely grateful to the organizations that have generously provided access to their resources, including frameworks, APIs, and data. Your contributions have played a crucial role in enhancing the functionality and effectiveness of the app, and we are truly appreciative of your support.
                        Furthermore, we want to acknowledge the innovative use of AI-generated images in this web application. These images have added a unique and visually captivating element to the user experience, enriching the overall design and aesthetics of the platform.
                        Once again, thank you to everyone who has contributed to the development and success of this project. Your support has been instrumental, and we are truly grateful for the opportunity to collaborate with such talented individuals and organizations.</h1>
                        
                    </div>
                </div>
        </div>
        </>
    )
}

export default Acknowledgement