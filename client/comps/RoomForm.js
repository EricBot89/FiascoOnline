import React from "react";
import "./RoomForm.css";

class RoomForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="room-form">
        <form>
          <h2>Create a new game</h2>
          <input />
          <div className="room-form-buttons">
            <button>Cancel</button>
            <button>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export { RoomForm };
