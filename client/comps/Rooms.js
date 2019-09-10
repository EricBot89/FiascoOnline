import React from 'react'
import { Link } from "react-router-dom"
import {connect} from "react-redux"


const DCRooms = (props) => {
  const {rooms} = props
  return (
    <div className="rooms-container">
      <div className="roomsTools">
        <button>Create Game</button>
        <button>Join Game With Code</button>
        <button>Refresh Game List</button>
 
        </div>
    <div className="room-list" >
      {rooms.map( (room, idx) => (
        <div className='room-card' key={idx}>
          <Link to={`/game/${room.id}`}>{room.name}</Link>
        </div>
      ))}
    </div >
    </div>
  )
}

const mapState = state => ({
    rooms: state.gameList.openGames
})

const Rooms = connect(mapState,null)(DCRooms)

export { Rooms }