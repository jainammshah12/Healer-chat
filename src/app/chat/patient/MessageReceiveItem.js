import React from 'react';

const MessageReceiveItem = ({ message }) => {
  return (
    <div style={{backgroundColor: "grey", paddingLeft: "30px", paddingTop: "10px",paddingBottom: "10px",
    paddingRight: "30px", left: "425px", fontSize: "20px", height: "90px" , borderRadius: "10px", 
    marginBottom: "60px", width: "300px", marginRight: "300px"}}>
      <p style={{}}>
        {message.content}
      </p>
    </div>
  );
};

export default MessageReceiveItem;