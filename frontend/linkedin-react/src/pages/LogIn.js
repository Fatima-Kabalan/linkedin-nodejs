import React from 'react';

const LogInPage = () =>{
    return(
        <>
        <form>
            <div className='flex-row'>
                <h1>Sign in</h1>
                <img src="./../public/logo.png"></img>
            </div>
            <h6>Stay updated on your professional world</h6>
            <div className='flex-column'>
                <input type="email" placeholder='Email'></input>
                <input type="password" placeholder='Password'></input>
                <button>Sign in</button>
            </div>
            <p>New to LinkedIn?<span><a href="signup" />Join now</span></p>
        </form>
        </>
        )
}

export default LogInPage;