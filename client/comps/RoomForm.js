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
          <button>Cancel</button>
          <button>Create</button>
        </form>
      </div>
    );
  }
}

export { RoomForm };
