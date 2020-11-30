import React, { useState } from 'react'
import "./ChatInput.css"
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';
//import { Button } from '@material-ui/core'
function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");
    const [{user}] = useStateValue();
    
    const sendMessage = (e) => {
        e.preventDefault();

        if(channelId){
            db.collection('channels').doc(channelId).collection('messages').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage: user.photoURL,

        });
    }
    setInput(""); 
    };
    
    return (
        <div className ="chatInput">
            <form>
                <input
                value ={input}
                onChange={(e)=>setInput(e.target.value)} 
                placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button type="sumbit" onClick={sendMessage}>SEND</button>
            </form>
            
        </div>
    );
}

export default ChatInput;