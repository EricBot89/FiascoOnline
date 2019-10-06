import React from "react";
import { connect } from "react-redux";
import { Chat } from "./Chat";
import { leaveRoom } from "../store";
import "./game.css"

class DCGame extends React.Component {
  componentWillUnmount() {
    const { locale, leaveRoom } = this.props;
    leaveRoom(locale);
  }
  render() {
    return (
      <div className="game-window">
        <h1> {this.props.game.name}</h1>
        <div className='game-widgets'></div>
        <Chat />
      </div>
    );
  }
}

const mapState = state => {
  return {
    locale: state.chat.locale,
    game:  state.game.room
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
