import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import roomsReducer from './rooms/roomsSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomsReducer
    }
})