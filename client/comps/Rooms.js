import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Chat } from "./Chat";
import { joinRoom, leaveRoom } from "../store";
import "./Rooms.css";

const DCRooms = props => {
  const { rooms, join, reset } = props;
  reset();
  return (
    <div className="rooms-container">
      <div className="rooms-tools">
        <button>Create Game</button>
        <button>Join Game With Code</button>
        <button>Refresh Game List</button>
        <Chat locale="Global" />
      </div>
      <div className="room-list">
        {rooms.map((room, idx) => (
          <div className="room-card" key={idx}>
            <Link to={`/game/${room.id}`} onClick={() => join(`${room.name}`)}>
              {room.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapState = state => ({
  rooms: state.gameList.openGames
});

const mapDispatch = dispatch => ({
  join(room) {
    dispatch(joinRoom(room));
  },
  reset() {
    dispatch(leaveRoom());
  }
});

const Rooms = connect(
  mapState,
  mapDispatch
)(DCRooms);

export { Rooms };
