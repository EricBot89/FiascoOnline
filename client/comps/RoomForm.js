import React from "react";
import { createRoom } from "../store";
import "./RoomForm.css";

class RoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: ""
    };
    this.createRoom = this.createRoom.bind(this);
    this.formControl = this.formControl.bind(this);
  }

  createRoom(e) {
    e.preventDefault();
    const { roomName } = this.state;
    createRoom(roomName);
    this.props.cancel(e);
  }

  formControl(e) {
    this.setState({roomName: e.target.value})
  }

  render() {
    const { cancel } = this.props;
    return (
      <div className="room-form">
        <form>
          <h2>Create a new game</h2>
          <input name="roomName" value={this.state.roomName} onChange={this.formControl} />
          <div className="room-form-buttons">
            <button onClick={cancel}>Cancel</button>
            <button onClick={this.createRoom}>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export { RoomForm };
