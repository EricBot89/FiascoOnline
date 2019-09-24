import React from "react";
import { connect } from "react-redux";
import { Chat } from "./Chat";
import { leaveRoom } from "../store";

class DCGame extends React.Component {
  componentWillUnmount() {
    const { locale, leaveRoom } = this.props;
    leaveRoom(locale);
  }
  render() {
    return (
      <div className="game-window">
        <h1>welcome to the game</h1>
        <Chat />
      </div>
    );
  }
}

const mapState = state => {
  return {
    locale: state.chat.locale
  };
};

const mapDispatch = dispatch => ({
  leaveRoom(room) {
    dispatch(leaveRoom(room));
  }
});

const Game = connect(
  mapState,
  mapDispatch
)(DCGame);

export { Game };
