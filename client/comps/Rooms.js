import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Chat } from "./Chat";
import { joinRoom, leaveRoom } from "../store";
import "./Rooms.css";
import { leave } from "../store/socket";

const DCRooms = props => {
  const { rooms, join, leave } = props;
  join("Global");
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
            <Link
              to={`/game/${room.id}`}
              onClick={() => {
                leave("Global");
                join(`${room.name}`);
              }}
            >
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
  leave(room) {
    dispatch(leaveRoom(room));
  }
});

const Rooms = connect(
  mapState,
  mapDispatch
)(DCRooms);

export { Rooms };
