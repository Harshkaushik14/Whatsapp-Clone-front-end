import React from 'react';
import './ChatComponent.css';
import {Avatar , IconButton} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import MicIcon from '@material-ui/icons/Mic';

function ChatComponent() {
    return (
        <div className="chatcomponent">

            <div className="chat__header">
            <Avatar />
            
            <div className="chatheader__info">
                <h3>Room name</h3>
               <p>Last Seen....</p>
            </div>
            
           <div className="chatheaderRight">
               <IconButton>
                <SearchOutlinedIcon/>
                </IconButton>
                <IconButton>
                <AttachFileIcon/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            
        </div>

        <div className="chat__body">
            <p className="chatmessage">
                <span className="chatname">Harsh</span>
                This is a message

                <span className="timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chatmessage chatreciver">
                <span className="chatname">Harsh</span>
                This is a message

                <span className="timestamp">{new Date().toUTCString()}</span>
                </p>
        </div>
        
        <div className="chatfooter">
<InsertEmoticonRoundedIcon/>
<form>
<input
placeholder="Type a message"
type="text"
/>
<button type="submit"> Send a message </button>
</form>
<MicIcon/>

        </div>

        </div>
    );
}

export default ChatComponent
