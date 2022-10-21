import React from 'react';
import { Link } from 'react-router-dom';


const LogInPage = () =>{
    return(
        <>
        <div className="img-logo">        
            <img src="https://th.bing.com/th/id/R.6e154f80072e0f134105ec35599d74a6?rik=rPaegHNYFDueCw&pid=ImgRaw&r=0" alt="logo"></img>
        </div>
        <div className="signin-box">
            <h1>Sign in</h1>
            <h4>Stay updated on your professional world</h4>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="button" value="Sign in" />
                <p className="para-2">New to LinkedIn ?<Link to="/signup">Join now</Link></p>
            </form>
            
        </div>
        </>
        )
}

export default LogInPage;