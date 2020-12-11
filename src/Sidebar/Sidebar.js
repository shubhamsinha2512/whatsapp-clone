import React from 'react'
import "./Sidebar.css";
import {Avatar, IconButton} from '@material-ui/core';
import DountLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';

import SidebarChat from './SidebarChat/SidebarChat'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                
                <Link to="/profile">
                    <IconButton><Avatar /></IconButton>
                </Link>
                <div className="sidebar_headerRight">
                    <IconButton><DountLargeIcon /></IconButton>
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            </div> 

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>      
        </div>
    )
}

export default Sidebar
