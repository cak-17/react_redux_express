/* eslint-disable react/prop-types */
import React from "react" 
import { useSelector, useDispatch } from "react-redux"
import "./styles.css"
import { fetchRooms, selectRooms } from "../../store/rooms/roomsSlice"

const RoomItem = (props) => {
    const room = props.room
    return (
        <tr>
        <td>{room.number}</td>
        <td>{room.category}</td>
        <td>{room.status}</td>
        </tr>

    )
}

const RoomTable = (props) => {
    return (
    <table>
        <thead>
            <tr>
                <td>Number</td>
                <td>Category</td>
                <td>Status</td>
            </tr>
        </thead>
        <tbody>
            {props.rooms.map(room => <RoomItem key={room.number} room={room} />) }
        </tbody>
    </table>
    )
}
const RoomsList = () => {
    const rooms = useSelector(selectRooms)
    const dispatch = useDispatch()
    const content = !rooms.rooms ? <p>Try and Hit Refresh</p> : <RoomTable rooms={rooms.rooms} /> 

    const loading = rooms.loading ? <p>Loading</p> : null

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(fetchRooms())
        console.log(rooms)
    }

    return (
        <React.Fragment>
            <h2>All Rooms</h2>
            {loading}
            {content}
            <button onClick={e => handleClick(e)}>Refresh</button>
        </React.Fragment>
    )
}

export default RoomsList