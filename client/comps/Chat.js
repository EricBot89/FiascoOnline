import React from "react";
import { connect } from "react-redux";
import { sendChatMessage, updateLog, syncLog, socket } from "../store";
import "./Chat.css";

class DCChat extends React.Component {
  constructor(props) {
    super(props);

    const { chatLog } = this.props;
    const log = chatLog.join("\n");

    this.state = {
      typing: "",
      log
    };

    this.formControl = this.formControl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateChatLog = this.updateChatLog.bind(this)
  }

  componentDidMount() {
    this.props.syncChat();

    socket.on("newChatMessage",this.updateChatLog);
  }

  updateChatLog() {
    const { chatLog } = this.props;
    console.log(chatLog)
    const log = chatLog.join("\n");
    this.setState({ log });
  }

  componentWillUnmount() {
    socket.off("newChatMessage");
  }

  formControl(e) {
    const { value } = e.target;
    this.setState({ typing: value });
  }

  onSubmit() {
    const { typing } = this.state;
    const { user, locale } = this.props;
    sendChatMessage(user || "anon", typing, locale)
    this.setState({ typing: "" });
  }

  render() {
    const { log } = this.state;
    return (
      <div className="chat-window">
        <textarea className="chat-log" value={log} rows={19} readOnly />
        <div className="chat-input">
          <input value={this.state.typing} onChange={this.formControl} />
          <button onClick={this.onSubmit}>GO</button>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    locale: state.chat.locale,
    chatLog: state.chat.chatLog
  };
};

const mapDispatch = dispatch => {
  return {
    syncChat() {
      dispatch(syncLog());
    }
  };
};

const Chat = connect(
  mapState,
  mapDispatch
)(DCChat);

export { Chat };
