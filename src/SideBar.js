import React from 'react';
import './SideBar.css';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import {Avatar , IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SideBarChat from './SideBarChat';


function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <IconButton>
        <Avatar src="https://i.ytimg.com/vi/1roy4o4tqQM/maxresdefault.jpg" />
    </IconButton>
<div className="sidebar__Right">
   
    <IconButton>
<DonutLargeRoundedIcon />
</IconButton>

<IconButton>
    <ChatBubbleRoundedIcon/>
</IconButton>

<IconButton>
    <MoreVertIcon />
</IconButton>
</div>

            </div>

            <div className="sidebar__search">
                <div className="sidebarSearch__container">
                
             <SearchIcon/>
             <input placeholder="Start a New Chat" type="text"/>
                </div>
            </div>

           <div className="sidebar__chats">

               <SideBarChat/>
               <SideBarChat/>
               <SideBarChat/>

           </div>
            
        </div>
    )
}

export default SideBar
