import React from 'react'

import uttarpradesh from "./uttarpradesh.jpg"
import biharImage from "./bihar.jpg"
import andhrapradesh from "./andhrapradesh.jpg"
import assam from "./assam.jpg"
import chhattisgarh from "./chhattisgarh.jpg"
import delhi from "./delhi.jpg"
import goa from "./goa.jpg"

import haryana from "./haryana.jpg"
import himachalpradesh from "./himachalpradesh.jpg"
import jammukashmir from "./jammukashmir.jpg"
import jharkhand from "./jharkhand.jpg"
import karnataka from "./karnataka.jpg"
import kerala from "./kerala.jpg"
import ladakh from "./ladakh.jpg"
import madhyapradesh from "./madhyapradesh.jpg"
import maharashtra from "./maharashtra.jpg"
import manipur from "./manipur.jpg"
import odisha from "./odisha.jpg"
import puducherry from "./puducherry.jpg"
import rajasthan from "./rajasthan.jpg"
import sikkim from "./sikkim.jpg"
import tamilnadu from "./tamilnadu.jpg"
import tripura from "./tripura.jpg"
import uttarakhand from "./uttarakhand.jpg"
import westbengal from "./westbengal.jpg"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';




const stateImages = {
    'IN-UP': uttarpradesh,
    'IN-BR': biharImage,
    'IN-MH': maharashtra,
    'IN-WB': westbengal,
    'IN-MP': madhyapradesh,
    'IN-RJ': rajasthan,
    'IN-TN': tamilnadu,
    'IN-KA': karnataka,
    'IN-AP': andhrapradesh,
    'IN-OR': odisha,
    'IN-JH': jharkhand,
    'IN-KL': kerala,
    'IN-AS': assam,
    'IN-HR': haryana,
    'IN-CT': chhattisgarh,
    'IN-UT': uttarakhand,
    'IN-DL': delhi,
    'IN-JK': jammukashmir,
    'IN-HP': himachalpradesh,
    'IN-TR': tripura,
    'IN-MN': manipur,
    'IN-GA': goa,
    'IN-SK': sikkim,
    'IN-PY': puducherry,
};

function ImagePage() {
    const { id } = useParams(); 
    const imageSrc = stateImages[id]; 

    return (
        <div id="image-container">
            {imageSrc && ( 
                <>
                    <img src={imageSrc} alt={id} className="tooltip_img" />
                    <button onClick={() => window.history.back()} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins mr-5'>Back to Map</button>
                </>
            )}
            {!imageSrc && <p>No image available for this state.</p>}
        </div>
    );
}

export default ImagePage;
