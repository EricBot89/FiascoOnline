import React from 'react'
import { Link } from "react-router-dom"



const Rooms = (props) => {
  const rooms = dummyRooms
  return (
    <div className="room-list" >
      {rooms.map(room => (
        <div className='room-card'>
          <Link to={`/game/${room.id}`}>{room.name}</Link>
        </div>
      ))}
    </div >
  )
}
export { Rooms }