import React,{useState} from 'react';
import backFormOne from "../../Pictures/Shopbg3.jpg"
import { useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


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


function AddItems() {



    const [itemname, setItemName] = useState('');
    const [quantity, setQuantityName] = useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');
    const [itemid,setItemID]=useState('')

    const [file, setFile] = useState();


    const navigate = useNavigate();
    const storedId = localStorage.getItem('storeId');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(); 
        formData.append('file', file); 
        formData.append('itemname', itemname);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('description',description);
        formData.append('itemid',itemid)
        formData.append('shopid', storedId);
        try {
            const response = await axios.post(`http://localhost:3002/additems`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            console.log(response.data); 
            navigate(`/store/${storedId}`);
        } catch (error) {
            // console.error('Error uploading file:', error);
            alert("Compulsory to be Logged in for registering shops")
        }
    };

    const handleNext = (event) => {
        if (!itemname||!quantity||!price||!file||!description){
            event.preventDefault();
            alert("Any field should not be empty.")
            return;
        }
        let itemid = uuidv4();
        itemid = itemid.replace(/-/g, '').substring(0, 8) 
        setItemID(itemid)
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center w-full h-screen bg-slate-500'>
                <img
                    src={backFormOne}
                    alt="Background"
                    style={fullScreenImageStyle}
                />
                <div className='w-full h-full flex items-center justify-center '>
                    <div className='bg-white bg-opacity-40 p-10 md:p-16 lg:p-20 rounded-3xl border-2 border-gray h-21/27 w-3/4 ' style={glassEffect}>
                        <h1 className='text-3xl font-semibold font-poppins mt-0 mb-4 p-0'>Welcome! Please enter your details of the items</h1>
                        <form onSubmit={handleSubmit}>
                        <div className='mt-5 grid grid-cols-3  '>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black '>Item Name</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 mt-1 bg-transparent placeholder-black'
                                    placeholder='Enter your Item Name'
                                    value={itemname}
                                    onChange={(e) => setItemName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black '>Quantity</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 mt-1 ml-2  bg-transparent placeholder-black'
                                    type="number"
                                    placeholder='Enter quantity'
                                    value={quantity}
                                    onChange={(e) => setQuantityName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black ml-3'>Price</label>
                                <input
                                    className='w-full sm:w-50 border-2 border-black p-4 mt-1 ml-4 bg-transparent placeholder-black'
                                    placeholder='Enter the price'
                                    value={price}
                                    onChange={(e)=>setPrice(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black '>Description</label>
                                <textarea
                                        className='w-full sm:w-54 border-2 border-black p-4 mt-1 ml-2  bg-transparent placeholder-black'
                                        placeholder='Enter Description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        rows={4} // Adjust rows as needed
                                        style={{ height: '120px', overflowY: 'auto' }} 
                                    />
                            </div>
                            
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3 ml-4'>Upload a picture of the store</label>
                                <input 
                                onChange={e => setFile(e.target.files[0])}
                                className='w-full sm:w-54 ml-10 mt-6 '
                                type="file"/>
                            </div>
                        </div>
                        <div className='flex  items-center mt-4 ml-0'>
                            <div className="flex items-center lg:order-2">                             
                                <button type="submit" onClick={handleNext} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 mr-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins border-2 border-black" >
                                    ADD ITEM 
                                </button>
                            </div>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddItems;
