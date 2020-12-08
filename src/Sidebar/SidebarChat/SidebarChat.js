import React from 'react'
import {useState, useEffect} from 'react'

import './SidebarChat.css'
import {Avatar} from '@material-ui/core'

function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const createChat = ()=>{
        const roomName = prompt("Enter room name - functionality to be added yet");
        console.log(roomName);
        if(roomName){
            // add backend connection
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h3>Name</h3>
                <p>Last msg...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
