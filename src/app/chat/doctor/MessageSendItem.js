import React from 'react';

const MessageSendItem = ({ message, index }) => {
  return (
    <div style={{backgroundColor: "white", paddingLeft: "30px", paddingTop: "10px", paddingBottom: "10px",
    paddingRight: "30px", right: "225px", fontSize: "20px", height: "90px" , borderRadius: "10px", 
    marginBottom: "60px", width: "300px", marginLeft: "300px"}}>
      <p style={{
      }}>
        {message.content}
      </p>
    </div>
  );
};

export default MessageSendItem;