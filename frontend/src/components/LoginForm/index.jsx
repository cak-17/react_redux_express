// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    login,
    selectAuth
} from "../../store/auth/authSlice"
import "./styles.css"


const LoginForm = () => {
    const dispatch = useDispatch()
    const auth = useSelector(selectAuth)

    const [ formData, setFormData ] = useState({
        "username": "",
        "password": ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(login(formData))
    }

    const error = auth.error ? <p>Error, try again</p> : null

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                placeholder="Insert Your Username"
                name="username"
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => handleChange(e)}
                required
            />
            <input
                placeholder="Your Secret Password"
                name="password"
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
                required
            />
            <button type="submit">Log In</button>
            {error}
        </form>
    )
}

export default LoginForm