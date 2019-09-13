import React from "react";
import { connect } from "react-redux";
import {sendChatMessage} from "../store"
import "./Chat.css"

const dumyChatLog = [ 
    ['[user1 12:13:26] hi'],
    ['[user2 12:24:26] hello'],
    ['[user3 01:24:26] quite a long message to the chat, meant to bleed over onto another line']]

class DCChat extends React.Component {
  constructor(props) {
    super(props);
    const { locale } = this.props;
    this.state = {
      locale,
      typing: '',
      chatLog: dumyChatLog.join('\n'),
    };

    this.formControl = this.formControl.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  formControl(e){
    const {value} = e.target
    this.setState({typing: value})
  }

  onSubmit(e){
      e.preventDefault()
      const {typing, locale} = this.state
      const {user} = this.props || "anon"
      sendChatMessage(user, typing, locale )
      dumyChatLog.push(`[anon ${Date.now()}]` + typing)
      this.setState({typing: '',chatLog: dumyChatLog.join('\n')})
  }

  render() {
    return (
      <div className="chat-window">
        <textarea 
        className='chat-log'
        value = {this.state.chatLog}
        rows={19}
        readOnly
        />
        <form 
        className="chat-input"
        onSubmit={this.onSubmit}
        >
        <input 
        value = {this.state.typing}
        onChange={this.formControl}
        />
        <button type="submit">GO</button>
        </form>
      </div>
    );
  }
}

const Chat = connect(null,null)(DCChat);

export { Chat };
