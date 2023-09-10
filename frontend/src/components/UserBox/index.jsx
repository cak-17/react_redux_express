import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    logout,
    selectAuth
} from "../../store/auth/authSlice"
import "./styles.css"

const UserBox = () => {
    const auth = useSelector(selectAuth)
    const dispatch = useDispatch()

    return (
        <React.Fragment>
        <table>
            <thead>
                <tr className="strongRow">
                    <td>UserName</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Password</td>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>{auth.user.username}</td>
                        <td>{auth.user.firstName}</td>
                        <td>{auth.user.lastName}</td>
                        <td>{auth.user.password}</td>
                    </tr>
                </tbody>
        </table>
        <button onClick={() => dispatch(logout())}>Logout</button>
        </React.Fragment>
    ) 
}


export default UserBox;