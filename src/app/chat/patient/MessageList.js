import React, {useEffect, useRef} from 'react';
import MessageSendItem from './MessageSendItem';
import MessageReceiveItem from './MessageReceiveItem';

const MessageList = ({ messages }) => {

  return (
    <div  style={{overflowY: "scroll", maxHeight: "700px"}}>
      {messages.map((message, index) => (
          (message.sender == 'patient') ?
            <MessageSendItem key={index} message={message} index={index}/>
            : 
            <MessageReceiveItem key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;