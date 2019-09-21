import React from "react";
import { Chat } from "./Chat";

const Game = props => {
  return (
    <div className="game-window">
      <h1>welcome to the game</h1>
      <Chat />
    </div>
  );
};

export { Game };
