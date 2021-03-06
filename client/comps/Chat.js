import React from "react";
import { connect } from "react-redux";
import { sendChatMessage, requestLog, socket, leaveRoom } from "../store";
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
    this.updateChatLog = this.updateChatLog.bind(this);
  }

  async componentDidMount() {
    const { locale } = this.props;
    requestLog(locale);
    socket.on("logSync", this.updateChatLog);
    socket.on("newChatMessage", this.updateChatLog);
  }

  updateChatLog() {
    const { chatLog } = this.props;
    const log = chatLog.join("\n");
    this.setState({ log });
  }

  componentWillUnmount() {
    socket.off("logSync", this.updateChatLog);
    socket.off("newChatMessage", this.updateChatLog);
  }

  formControl(e) {
    const { value } = e.target;
    this.setState({ typing: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { typing } = this.state;
    const { user, locale } = this.props;
    sendChatMessage(user || "anon", typing, locale);
    this.setState({ typing: "" });
  }

  render() {
    const { log } = this.state;
    return (
      <div className="chat-window">
        <textarea className="chat-log" value={log} rows={19} readOnly />
        <form className="chat-input" onSubmit={this.onSubmit}>
          <input value={this.state.typing} onChange={this.formControl} />
          <button type="submit">GO</button>
        </form>
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

const Chat = connect(
  mapState,
  null
)(DCChat);

export { Chat };
