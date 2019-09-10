import React from 'react'
import { Link } from "react-router-dom"

const dummyRooms = [
  'room1',
  'room2',
  'room3'
]

const Rooms = (props) => {
  const rooms = dummyRooms
  return (
    <div className="room-list" >
      {rooms.map(room => (
        <div classname='room-card'>
          <Link to={`/game/${room}`}>{room}</Link>
        </div>
      ))}
    </div >
  )
}
export { Rooms }