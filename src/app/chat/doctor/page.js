"use client";
import React, { useState } from 'react';
import ChatBox from './ChatBox';

let messages = [
    {
        id: 2,
        sender: 'patient',
        content: 'I am having issues with my throat. I have difficulty swallowing food and a lot of coughing. \
        I am not sure what is wrong. Could you help me?',
        timestamp: new Date().getTime(),
    },
    {
        id: 3,
        sender: 'patient',
        content: 'Is this a dangerous disease? I hope it is curable.',
        timestamp: new Date().getTime(),
    },
    {
        id: 4, 
        sender: 'patient',
        content: 'Yes, I will keep that in mind and take these medicines on time as you suggested. Thank you.',
        timestamp: new Date().getTime(),
    },
];
const Chat = () => {
    const [currMessages, setCurrMessages] = useState([
        {
            id: 1,
            sender: 'patient',
            content: 'Hello, doctor!',
            timestamp: new Date().getTime(),
        }
    ]);

    const handleSendMessage = (message) => {
        setCurrMessages([...currMessages, message]);
    };
    return (
        <div style={{width: "51%", maxWidth: "fit-content",margin: "auto", padding: "20px", border: "1px solid black",
        justifyContent: "space-between", display: "flex", flexDirection: "column", height: "100vh"}}>
            <div style={{display: "inline"}}>
                <h1 style={{fontFamily: "var(--font-mono)"}}>Talk With a Patient</h1>
            </div>
            <ChatBox messages={currMessages} onSendMessage={handleSendMessage} />
        </div>        
    );
}

export default Chat;