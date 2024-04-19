"use client";
import React, { useState } from 'react';
import ChatBox from './ChatBox';

let messages = [
    {
        id: 2,
        sender: 'doctor',
        content: 'Okay do you have any other issues?',
        timestamp: new Date().getTime(),
    },
    {
        id: 3,
        sender: 'doctor',
        content: 'I think this disease is goiter. It is caused by a lack of iodized salt in your diet. Your throat \
        is undergoing a lot of different changes since it needs this particular kind of salt. Don\'t worry it is \
        absolutely curable. I wrote these medicines - Erithromycin (1 day and 1 night), Levothyroxine (Once before lunch)',
        timestamp: new Date().getTime(),
    },
    {
        id: 4,
        sender: 'doctor',
        content: 'Alright great! Give me a call if you have any further issues.',
        timestamp: new Date().getTime(),
    }
    
];
const Chat = () => {
    const [currMessages, setCurrMessages] = useState([
        {
        id: 1,
        sender: 'doctor',
        content: 'Hi there! How can I help you?',
        timestamp: new Date().getTime(),
    },]);

    const handleSendMessage = (message) => {
        setCurrMessages([...currMessages, message]);
    };
    return (
        <div style={{width: "51%", maxWidth: "fit-content",margin: "auto", padding: "20px", border: "1px solid black",
        justifyContent: "space-between", display: "flex", flexDirection: "column", height: "100vh"}}>
            <div style={{display: "inline"}}>
                <h1 style={{fontFamily: "var(--font-mono)"}}>Talk With a Doctor</h1>
            </div>
            <ChatBox messages={currMessages} onSendMessage={handleSendMessage} />
        </div>        
    );
}

export default Chat;