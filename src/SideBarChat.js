import React from 'react';
import './SideBarChat.css';
import {Avatar , IconButton} from '@material-ui/core';

function SideBarChat() {
    return (
        <div className="sidebarchat">
            <Avatar />
            <div className="sidebarchat__info">
                <h2>Room Name</h2>
                <p>The last message</p>
            </div>

        </div>
    )
}

export default SideBarChat
