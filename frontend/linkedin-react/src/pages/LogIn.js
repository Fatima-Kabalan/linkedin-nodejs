import React from 'react';

const LogInPage = () =>{
    return(
        <>
        {/* <div className='container'>
            <div className='flex'>
                <form className=''>
                    <div className='flex-row flex'>
                        <div className="img-logo">
                            <img  src="https://th.bing.com/th/id/R.6e154f80072e0f134105ec35599d74a6?rik=rPaegHNYFDueCw&pid=ImgRaw&r=0" alt="logo"></img>
                        </div>
                        <h1 className='sign-in'>Sign in</h1>
                    </div>
                    <div className=''>
                        <h6>Stay updated on your professional world</h6>
                        <div className='flex-column'>
                            <input type="email" placeholder='Email'></input>
                            <input type="password" placeholder='Password'></input>
                        </div>
                        <button className='btn-blue'>Sign in</button>
                        <p>New to LinkedIn?<span><a href="signup" />Join now</span></p>
                    </div>
                </form>
            </div>
        </div>
        */}
        <div className="img-logo">        
            <img src="https://th.bing.com/th/id/R.6e154f80072e0f134105ec35599d74a6?rik=rPaegHNYFDueCw&pid=ImgRaw&r=0" alt="logo"></img>
        </div>
        <div className="signin-box">
            <h1>Sign in</h1>
            <h4>Stay updated on your professional world</h4>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="button" value="Submit" />
                <p className="para-2">New to LinkedIn ? <a href="signup">Join now</a></p>
            </form>
        </div>
        </>
        )
}

export default LogInPage;