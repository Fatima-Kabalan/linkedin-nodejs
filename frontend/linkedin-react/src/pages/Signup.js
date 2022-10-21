import React from 'react';

const SignUpPage= () =>{
    return(
        <>
            <div className="signup-box ">
                <div className="img-logo">        
                    <img src="https://th.bing.com/th/id/R.6e154f80072e0f134105ec35599d74a6?rik=rPaegHNYFDueCw&pid=ImgRaw&r=0" alt="logo"></img>
                </div>
                <h1>Sign Up</h1>
                <form>
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div id="radiobtn" className="flex">
                        <div className="l-radio"> <label>Company</label>
                        <input type="radio" value="Company" name="radiobtn" /></div>
                       <div className='l-radio'><label>User</label>
                        <input type="radio" value="User" name="radiobtn" /></div>
                        
                    </div>
                    <input type="button" value="Add profile" />
                    <input type="button" value="Sign up" />
                    
                </form>
            </div>
        </>
        )
}

export default SignUpPage;