import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Chat } from "./Chat";
import { RoomForm } from "./RoomForm";
import { joinRoom, leaveRoom, syncRoomsThunk, socket } from "../store";
import "./Rooms.css";

class DCRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.closePopUp = this.closePopUp.bind(this);
  }

  componentDidMount() {
    const { join, syncList } = this.props;
    join("Global");
    syncList();
    socket.on("roomCreated", syncList);
  }

  componentWillUnmount() {
    const { syncList } = this.props;
    socket.off("roomCreated", syncList);
  }

  closePopUp(e) {
    if (e.preventDefault) e.preventDefault();
    this.setState({ showForm: false });
  }

  render() {
    const { rooms, join, leaveRoom, syncList } = this.props;
    const { showForm } = this.state;
    return (
      <div className="rooms-container">
        <div className="rooms-tools">
          {showForm ? <RoomForm cancel={this.closePopUp} /> : ""}
          <button onClick={() => this.setState({ showForm: true })}>
            Create Game
          </button>
          <button>Join Game With Code</button>
          <button onClick={syncList}>Refresh Game List</button>
          <Chat />
        </div>
        <div className="room-list">
          {rooms.map((room, idx) => {
            console.log(room);
            return (
              <div className="room-card" key={idx}>
                <Link
                  to={`/game/${room.id}`}
                  onClick={() => {
                    console.log("hi");
                    join(`${room.roomName}`);
                  }}
                >
                  {room.roomName}
                </Link>
              </div>
            );
          })}
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
  },
  syncList() {
    dispatch(syncRoomsThunk());
  }
});

const Rooms = connect(
  mapState,
  mapDispatch
)(DCRooms);

export { Rooms };
