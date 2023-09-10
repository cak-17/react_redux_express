/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import AuthAPI from "../../api/AuthAPI";

const API = new AuthAPI()

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => { 
            state.isAuthenticated = true
            state.user = action.payload
            state.loading = false
        },
        loginRequest: state => { 
            state.loading = true
        },
        loginFailure: (state, action) => {
            state.isAuthenticated = false
            state.loading = false
            state.error = action.payload
        },
        logout: state => { 
            state.isAuthenticated = false
            state.loading = false
            state.user = null 
        },
    },
});

export const { loginSuccess, loginRequest, loginFailure, logout } = authSlice.actions

export const selectAuth = state => state.auth

export const login = (credentials) => {
    return (dispatch, getState) => {
        dispatch(loginRequest(credentials))
        API.login(credentials)
        .then(data => {
            dispatch(loginSuccess(data))
        })
        .catch(error => {
            dispatch(loginFailure(error))
        })
    }
}

export default authSlice.reducer