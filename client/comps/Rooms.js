import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Chat } from "./Chat";
import { RoomForm } from "./RoomForm";
import { joinRoom, leaveRoom } from "../store";
import "./Rooms.css";

class DCRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  componentDidMount() {
    const { join } = this.props;
    join("Global");
  }

  render() {
    const { rooms, join, leaveRoom } = this.props;
    const { showForm } = this.state;
    return (
      <div className="rooms-container">
        {showForm ? <RoomForm /> : ""}
        <div className="rooms-tools">
          <button onClick={() => this.setState({ showForm: true })}>
            Create Game
          </button>
          <button>Join Game With Code</button>
          <button>Refresh Game List</button>
          <Chat />
        </div>
        <div className="room-list">
          {rooms.map((room, idx) => (
            <div className="room-card" key={idx}>
              <Link
                to={`/game/${room.id}`}
                onClick={() => {
                  leaveRoom("Global");
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
  }
}

const mapState = state => ({
  rooms: state.gameList.openGames
});

const mapDispatch = dispatch => ({
  join(room) {
    dispatch(joinRoom(room));
  },
  leaveRoom(room) {
    dispatch(leaveRoom(room));
  }
});

const Rooms = connect(
  mapState,
  mapDispatch
)(DCRooms);

export { Rooms };
