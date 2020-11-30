import React, {useState, useEffect } from 'react'
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
    const { channelId } = useParams();
    const [channelDetails, setChannelDetails] = useState(null);
    const [channelMessages, setChannelMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId)
            .onSnapshot((snapshot) => setChannelDetails(snapshot.data()))
        }

        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(
            (snapshot) => setChannelMessages(
                snapshot.docs.map((doc) => doc.data())
            )
        )
    }, [channelId]);
    return(
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{channelDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className= "chat_headerRight"></div>
                <p>
                    <InfoOutlinedIcon/> Details
                </p>
            </div>
            <div className="chat_messages">
                {channelMessages.map(({message, timestamp, user, userImage}) => (
                    <Message 
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                />
                ))}
            </div>
            
            <ChatInput channelName={channelDetails?.name} channelId={channelId}/>

        </div>
    );
}

export default Chat;