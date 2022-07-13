import React from 'react'
import { useSelector } from 'react-redux'


function Profile() {
    const user = useSelector(state => state.user.value);
    console.log(user);
    return (
        <div>
            <h1>Profile Info</h1>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Age:{user.age}</p>
        </div>


    )
}

export default Profile