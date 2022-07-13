import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/user'

function Login() {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const fun = (data) => {
        console.log(data)
        setName(data)
    }
    return (
        <div>
            <input type="color" onChange={(data) => fun(data.target.value)} />

            <button onClick={() => dispatch(login({ name: name, age: 22, email: 'bala@gmail.com' }))}>Login</button>
            <button onClick={() => dispatch(logout({ name: '', age: 0, email: '' }))}>Logout</button>
        </div>
    )
}

export default Login