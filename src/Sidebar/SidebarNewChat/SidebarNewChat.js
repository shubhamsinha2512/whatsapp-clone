import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import './SidebarNewChat.css';

import {Avatar} from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';

function SidebarnewChat() {

    const [newChatId, setnewChatId] = useState();

    const handleSubmit = (event) =>{
        event.preventDefault();
    };

    const handleChange = (event) => {
        setnewChatId(event.target.value);
        // console.log(newChatId);
    };

    return (
        <div className='sidebar_newChat'>
            <div className="sidebar_newChatHeader">
                <Link to="/">
                    <KeyboardBackspaceIcon className='sidebar_newChatHeader_backBtn' />
                </Link>
                <h2 className='sidebar_newChatHeader_heading' >Start New Chat</h2>

            </div>   

            <div className="sidebar_newChatBody">
                <div className='sidebar_newChatBody_details'>
                    <p>
                        Enter UserId:
                    </p>
                    <form>
                        <input placeholder="Enter mobile number..." onChange={handleChange} value={newChatId}/>
                        <button type="submit" onClick={handleSubmit}><SearchIcon /></button>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default SidebarnewChat
