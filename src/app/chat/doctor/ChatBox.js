import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatBox = ({messages, onSendMessage}) => {
    const [inputValue, setInputValue] = useState('');

    const handleMessageSubmit = () => {
        if (inputValue.trim() === '') return;
        const newMessage = {
            id: messages.length + 1,
            sender: 'doctor',
            content: inputValue,
            timestamp: new Date().getTime() + 1000,
        };
    onSendMessage(newMessage);
    setInputValue('');
    console.log(messages);
  };
    return(
        <div style={{}}>
            <MessageList messages={messages} />
            <MessageInput
                value={inputValue}
                onChange={(e) => {
                    if(e.target.value > 25){ alert("Too long!");
                    return;}
                    setInputValue(e.target.value)}}
                onSubmit={handleMessageSubmit}

            />
           
        </div>
    );
};

export default ChatBox;