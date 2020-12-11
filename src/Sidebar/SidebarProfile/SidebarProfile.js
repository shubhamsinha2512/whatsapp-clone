import React from 'react'
import {Link} from 'react-router-dom'

import './SidebarProfile.css';

import {Avatar} from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import EditIcon from '@material-ui/icons/Edit';

function SidebarProfile() {
    return (
        <div className='sidebar_profile'>
            <div className="sidebar_profileHeader">
                <Link to="/">
                    <KeyboardBackspaceIcon className='sidebar_profileHeader_backBtn' />
                </Link>
                <h2 className='sidebar_profileHeader_heading' >Profile</h2>

            </div>   

            <div className="sidebar_profileBody">
                <Avatar className='sidebar_profileAvatar' src={`https://avatars.dicebear.com/api/human/abcde.svg`} />

                <div className='sidebar_profileBody_details'>
                    <p>
                        Your Name
                    </p>
                    <input value="Shubham Sinha"/>
                    <EditIcon />
                </div>
            </div>  
        </div>
    )
}

export default SidebarProfile
