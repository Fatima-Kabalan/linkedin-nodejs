import React from 'react';

const EditProfile = () => {
  return (
    <>
        <div className='flex container'>
            <form>   
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="button"  value="Add profile" ></input>
                <input type="button" value="Edit profile" />
            </form>
        </div>
       
    </>
  )
}
export default EditProfile;