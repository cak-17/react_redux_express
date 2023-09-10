
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from "../../store/auth/authSlice"

import UserBox from '../../components/UserBox';
import LoginForm from '../../components/LoginForm';
import RoomsList from '../../components/RoomsList';


import "./styles.css"


const Main = () => {
    return (
        <React.Fragment>
            <UserBox/>
            <RoomsList/>
        </React.Fragment>
    )
}

const Home = () => {

    const auth = useSelector(selectAuth)

    const title = auth.isAuthenticated ? `Bentornato ${auth.user.username}` : "Benvenuto!"
    return (
        <React.Fragment>
            <h2>{title}</h2>
            {auth.isAuthenticated ? <Main/> : <LoginForm/>}
        </React.Fragment>
    )
} 

export default Home;