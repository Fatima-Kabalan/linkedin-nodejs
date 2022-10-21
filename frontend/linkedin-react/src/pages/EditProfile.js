import React from 'react'

const EditProfile = () => {
  return (
    <>
        <button type="button">Add profile</button>
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="button" value="Edit profile" />
        </form>
    </>
   
  )
}
export default EditProfile;