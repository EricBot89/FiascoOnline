import React from "react";
import { connect } from "react-redux";
import { sendChatMessage, updateLog, syncLog } from "../store";
import "./Chat.css";

class DCChat extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      typing: "",
    };

    this.formControl = this.formControl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.props.syncChat()
  }

  formControl(e) {
    const { value } = e.target;
    this.setState({ typing: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { typing } = this.state;
    const { user, locale, addChat } = this.props;
    sendChatMessage(user, typing, locale)
    addChat(typing, locale)
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

const mapDispatch = dispatch => {
  return {
    addChat(typing, locale){
      dispatch(updateLog(typing));
    },
    syncChat(){
      dispatch(syncLog())
    }
  }
}

const Chat = connect(
  mapState,
  mapDispatch
)(DCChat);

export { Chat };
