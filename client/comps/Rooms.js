import React from 'react'
import { Link } from "react-router-dom"

const dummyRooms = [
  {
    id: 'room1',
    name: 'newbie friendly!!'
  },
  {
    id: 'room2',
    name: 'Alpha Complex Playset'
  },
  {
    id: 'room3',
    name: 'private game to which you have an invite'
  }
]

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