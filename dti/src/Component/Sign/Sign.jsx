import React,{useState} from 'react';
import backsignin from '../../Pictures/login_full_1.jpg';
import { useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios'

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


function TermsDialog({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 max-w-md rounded-lg overflow-y-auto max-h-[50vh] "> 
                <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
                <p className="text-sm"><h1 className='text-bold'>Privacy Policy:</h1> 1) We collect data such as location to improve our services that require location access and to facilitate users with features involving address. Additionally, usage data may be collected to improve the performance of our platform. 2)The collected data is used to personalize user experience, for analysis and research purposes. 3) We have used the bcrypt js library for hashing sensitive details to prevent any unauthorized access to user data. 4) User information may be shared with third-party service providers to avail services like payment features. These third parties are bound by confidentiality agreements which makes any other unauthorized use of this information by them, apart from the intended purpose, illegal. Terms and Conditions: 1) By using our web app, the users agree to comply with our terms and conditions. Failure to do so may lead to account restriction or termination. 2) Users are responsible for keeping their credentials such as username and password strictly confidential and any activity that occurs under their account. 3) The platform will not be responsible for any direct, indirect or incidental damages that may have occurred or are in any way, connected to the use of the platform, including but not limited to loss of revenue, profits, or data. 4) We have the right to change or update these terms and conditions at any time without prior notice. We highly recommend that users check the terms periodically for modifications. 5) Any content uploaded by the user, which does not follow applicable laws or is found fake may lead to appropriate action against the user. These include but are not limited to, store details that the user may upload, including location, commodities, prices, and advertisements. 6) Any form of discrimination against others based on race, ethnicity, caste, religion, gender or socioeconomic status is a punishable offence. This may lead to strict action being taken against the perpetrator. Ethical Considerations: 1) We intend to ensure the transparency of our operations. Practices regarding user data collection, usage and sharing will be communicated to the concerned parties. 2) We want to ensure equal opportunities for every individual using the platform. Any form of discrimination, whatever it may be, is unacceptable and punishable. 3) We value the feedback from our community and will work on the platform keeping their best interest in our minds.  4) We will ensure that user information will be utilized ethically for legitimate intended purposes and will not be shared with any third parties without the user’s consent, except as mentioned in our privacy policy.</p>
                <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

function Sign() {
    const [aadharNumber, setAadharNumber] = useState('');
    const [showTerms, setShowTerms] = useState(false);
    const [password,setPassword]=useState('');
    const [reconfirm,setConfirm]=useState('');
    const [phone,setPhone]=useState('');
    const [fullname,setfullName]=useState('');
    const [username,setUsername]=useState('');
    const [address,setAddress]=useState('');
    const [state,setState]=useState('');
    // const [city,setCity]=useState('');
    const [email,setEmail]=useState('')
    const [checkbox,setCheckBox]=useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/sign', { username, password, aadharNumber, phone, address, state, fullname,email })
            .then(result => {
                navigate('/login', { state: { username, password, aadharNumber, phone, address, state, fullname,email } });
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    alert('Username already exists. Please choose a different username.');
                } else {
                    console.log(err);
                }
            });
    };
    

    const handleRegister = (event) => {
        if (
            !aadharNumber||
            !password||
            !reconfirm||
            !phone ||
            !fullname ||
            !username ||
            !address ||
            
            !state||!email
        ) {
            event.preventDefault();
            alert("No field should remain empty")
            return;
        }if (checkbox===false) {
            event.preventDefault();
            alert("Please agree to the Terms and Conditions");
            return;
        }
        if (aadharNumber.length !== 12 && password!==reconfirm && phone.length!==10 && password.length>=15) {
            event.preventDefault();
            alert("1) Aadhar Number should be 12 digits in length.\n2) Re-confirm password does not match original password.\n3) Phone number should be 10 digits in length. ")
            return;
        }else if(aadharNumber.length!==12){
            event.preventDefault();
            alert("Aadhar Number should be 12 digits in length")
            return;
        }else if(password.length<15){
            event.preventDefault();
            alert("Password should not be less than 15 digits.")
            return;
        }
        else if(password!==reconfirm){
            event.preventDefault();
            alert("Re-confirm password does not match original password.")
            return;
        }
        else if(phone.length!==10){
            event.preventDefault();
            alert("Phone number should be 10 digits in length.")
            return;
        }
    };
    return (
        <>
            <div className='flex flex-col justify-center items-center w-full h-screen bg-slate-500'>
                <img
                    src={backsignin}
                    alt="Background"
                    style={fullScreenImageStyle}
                />
                <div className='w-full h-full flex items-center justify-center '>
                    <div className='bg-white bg-opacity-40 p-10 md:p-16 lg:p-20 rounded-3xl border-2 border-gray h-21/27 w-3/4 ' style={glassEffect}>
                        <h1 className='text-3xl font-semibold font-poppins mt-0 mb-4 p-0'>Welcome</h1>
                        <form onSubmit={handleSubmit}>
                        <div className='mt-5 grid grid-cols-3  '>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black '>Full Name</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 mt-1 bg-transparent placeholder-black'
                                    placeholder='Enter your Full Name'
                                    value={fullname}
                                    onChange={(e) => setfullName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black '>Aadhar Number</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 mt-1 ml-2  bg-transparent placeholder-black'
                                    placeholder='Enter your Aadhar No.'
                                    value={aadharNumber}
                                    onChange={(e) => setAadharNumber(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black ml-3'>Phone Number</label>
                                <input
                                    className='w-full sm:w-50 border-2 border-black p-4 mt-1 ml-4 bg-transparent placeholder-black'
                                    placeholder='Enter your phone number'
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3'>Username</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4  bg-transparent placeholder-black'
                                    placeholder='Enter your username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3'>Password</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 ml-2 bg-transparent placeholder-black'
                                    placeholder='Enter your password'
                                    type='password'
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3 ml-4'>Re-confirm Password</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 ml-4 bg-transparent placeholder-black'
                                    placeholder='Re-Enter your password'
                                    type='password'
                                    value={reconfirm}
                                    onChange={(e)=>setConfirm(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3'>Address</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4  bg-transparent placeholder-black'
                                    placeholder='Enter your Address'
                                    value={address}
                                    onChange={(e)=>setAddress(e.target.value)}
                                />
                            </div>
                            
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3 ml-4'>State</label>
                                <select
                                    className='w-full sm:w-54 border-2 border-black p-4 ml-2  bg-transparent placeholder-black'
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option value='' disabled hidden>Select your state</option> 
                                    <option value='Andhra Pradesh'>Andhra Pradesh</option>
                                    <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
                                    <option value='Assam'>Assam</option>
                                    <option value='Bihar'>Bihar</option>
                                    <option value='Chhattisgarh'>Chhattisgarh</option>
                                    <option value='Goa'>Goa</option>
                                    <option value='Gujarat'>Gujarat</option>
                                    <option value='Haryana'>Haryana</option>
                                    <option value='Himachal Pradesh'>Himachal Pradesh</option>
                                    <option value='Jharkhand'>Jharkhand</option>
                                    <option value='Kerala'>Kerala</option>
                                    <option value='Madhaya Pradesh'>Madhaya Pradesh</option>
                                    <option value='Maharashtra'>Maharashtra</option>
                                    <option value='Manipur'>Manipur</option>
                                    <option value='Meghalaya'>Meghalaya</option>
                                    <option value='Mizoram'>Mizoram</option>
                                    <option value='Nagaland'>Nagaland</option>
                                    <option value='Odisha'>Odisha</option>
                                    <option value='Punjab'>Punjab</option>
                                    <option value='Rajasthan'>Rajasthan</option>
                                    <option value='Sikkim'>Sikkim</option>
                                    <option value='Tamil Nadu'>Tamil Nadu</option>
                                    <option value='Telangana'>Telangana</option>
                                    <option value='Tripura'>Tripura</option>
                                    <option value='Uttarakhand'>Uttarakhand</option>
                                    <option value='Uttar Pradesh'>Uttar Pradesh</option>
                                    <option value='Anadaman and Nicobar Islands'>Anadaman and Nicobar Islands</option>
                                    <option value='Dadra and Nagar Haveli and Daman and Diu'>Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
                                    <option value='Lakshadeep'>Lakshadeep</option>
                                    <option value='New-delhi'>New-delhi</option>
                                    <option value='Ladakh'>Ladakh</option>
                                    <option value='Puducherry'>Puducherry</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black ml-3 mt-2'>Email</label>
                                <input
                                    className='w-full sm:w-50 border-2 border-black p-4 mt-1 ml-4 bg-transparent placeholder-black'
                                    placeholder='Enter your Email'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='flex  items-center mt-4 ml-0'>
                            <div className="flex items-center lg:order-2">
                                    <button type="submit" onClick={handleRegister} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 mr-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins border-2 border-black" >
                                        REGISTER
                                    </button>
                            </div>
                        </div>
                        </form>
                        <div className='flex justify-center items-center mt-4'>
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" value={checkbox}  onChange={(e) => setCheckBox(e.target.value)}/>
                            <label className="ml-2  font-bold">I agree to the <span className="text-blue-600 cursor-pointer " onClick={() => setShowTerms(!showTerms)}>Terms and Conditions</span></label>
                        </div>
                        <TermsDialog isOpen={showTerms} onClose={() => setShowTerms(false)} />
                        <div className='flex justify-center items-center mt-4'>
                            <p className='font-bold text-base ml-6'>Already have an account?</p>
                            <NavLink to="/login">
                                <button type="button" className='text-blue-800 text-base font-bold ml-2 hover:text-yellow-700 underline'>Login</button>
                                </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sign;
