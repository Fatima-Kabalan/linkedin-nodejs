import React from 'react';
import {FiBell,FiUser,FiHome} from "react-icons/fi";
import { FcBriefcase } from "react-icons/fc";


const LandingPage = () => {
    return (
        <>
        <nav>
            <div className= "img-logo" >
            <img src="https://th.bing.com/th/id/R.6e154f80072e0f134105ec35599d74a6?rik=rPaegHNYFDueCw&pid=ImgRaw&r=0" alt="logo"></img>

            </div>
            <ul>
                <li><a href="" ><FiHome/>
                    Home</a></li>
                <li><a href="" ><FcBriefcase/>
                    Jobs</a></li>
                <li><FiBell/>
                    <a href="">Notifications</a></li>
                <li><FiUser/>
                    <a href="">Me</a></li>
            </ul>
        </nav>
        </>
    );
}


export default LandingPage;