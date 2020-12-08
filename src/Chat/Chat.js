import React from 'react';
import './Chat.css';
import {useState, useEffect} from 'react';
import ChatMessage from './ChatMessage/ChatMessage';

import {Avatar, IconButton} from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Chat() {

    const [seed, setSeed] = useState("");
    var [input, setInput] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(input);
        setInput("");
    }

    return (
        <div className='chat'>
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                
                <div className="chat_headerInfo">
                    <h3>Chat Name</h3>
                    <p>Last Seen details...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton><SearchOutlined /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            </div>

            <div className="chat_body">
                <ChatMessage message="This is a message" isReciever={false}/>
                <ChatMessage message="This is a message" isReciever={true}/>
                <ChatMessage message="This is a message" isReciever={true}/>
                <ChatMessage message="This is a message" isReciever={false}/>
                <ChatMessage message="This is a message" isReciever={true}/>
            </div>

            <div className="chat_footer">
                <InsertEmoticonOutlinedIcon />
                <form>
                    <div>
                        <input value={input} onChange={(event) => setInput(event.target.value)} type="text" placeholder="Type a message..." />
                    </div>
                    <button type="submit" onClick={sendMessage} className="chat_footerSendBtn">
                        <SendOutlinedIcon className="chat_footerSend" />
                    </button>
                </form>
                <MicNoneOutlinedIcon className="chat_footerMic" />
            </div>
        </div>
    )
}

export default Chat
