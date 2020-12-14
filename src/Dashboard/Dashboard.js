import React from 'react'
import './Dashboard.css'

import {Switch, Route} from 'react-router-dom';
import Chat from '../Chat/Chat'
import SidebarNewChat from '../Sidebar/SidebarNewChat/SidebarNewChat';
import Sidebar from '../Sidebar/Sidebar';
import SidebarProfile from '../Sidebar/SidebarProfile/SidebarProfile';

function Dashboard() {
    return (
        <div className='dashboard'>
            <Switch>
              <Route path="/" exact component={Sidebar} />
              <Route path="/profile" component={SidebarProfile} />
              <Route path="/newChat" component={SidebarNewChat} />
            </Switch>
            <Chat />
        </div>
    )
}

export default Dashboard
