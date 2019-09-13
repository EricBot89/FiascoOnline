import React from "react";
import { connect } from "react-redux";
import { sendChatMessage } from "../store";
import "./Chat.css";

class DCChat extends React.Component {
  constructor(props) {
    super(props);
    const { locale, chatLog } = this.props;
    this.state = {
      typing: "",
      chatLog: []
    };

    this.formControl = this.formControl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  formControl(e) {
    const { value } = e.target;
    this.setState({ typing: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { typing } = this.state;
    const { user, locale } = this.props || "anon";
    sendChatMessage("anon", typing, locale);
    this.setState({ typing: "" });
  }

  render() {
    const { chatLog } = this.props;
    const log = chatLog.join('\n')
    return (
      <div className="chat-window">
        <textarea
          className="chat-log"
          value={log}
          rows={19}
          readOnly
        />
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
