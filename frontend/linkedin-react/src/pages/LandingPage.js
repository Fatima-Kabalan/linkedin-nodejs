import React from 'react';
import NavUser from '../components/NavUser';
import { useState } from 'react';



const LandingPage = () => {
    // if(localStorage.getItem("user").type === "compnay"){
    //     setCompany(true);
    // }
    const [company ,setCompany] = useState(false);
    return (
        <>
            <NavUser type={company}/>
            <div className='grey'>
            </div>
        </>
    );
}


export default LandingPage;