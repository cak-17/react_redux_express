import { createSlice } from "@reduxjs/toolkit";
import RoomsAPI from "../../api/RoomsAPI";

const API = new RoomsAPI()

export const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        rooms: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchRoomsRequest: state => {
            state.loading = true
        },
        fetchRoomsSuccess: (state, action) => {
            state.loading = false
            state.rooms = action.payload
        },
        fetchRoomsFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { fetchRoomsRequest, fetchRoomsSuccess, fetchRoomsFailure } = roomsSlice.actions

export const selectRooms = state => state.rooms

export const fetchRooms = () => {
    return (dispatch, getState) => {
        console.log(`Before: ${getState().rooms.rooms}`)
        dispatch(fetchRoomsRequest())
        API.getAll()
            .then(data => {
                dispatch(fetchRoomsSuccess(data))
                console.log(`After: ${getState().rooms.rooms}`)
            })
            .catch(error => {
                dispatch(fetchRoomsFailure(error))
            })
    }
}

export default roomsSlice.reducer