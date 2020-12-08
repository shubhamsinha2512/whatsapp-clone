import React from 'react'
import './ChatMessage.css'

function ChatMessage(props) {
    return (
        <p className={`chat_message ${props.isReciever && 'chat_reciever'}`}>
            <span className="chat_name">Shubham</span>
                {props.message}
            <span className="chat_timestamp">3:52 pm</span>
        </p>
    )
}

export default ChatMessage;
