import React from 'react';
import Link from 'next/link';

const MessageInput = ({ value, onChange, onSubmit }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div style={{width: "1100px", margin: "auto"}}>
      <input
        type="text"
        style={{width: "680px", height: "45px", fontSize: "20px", position: "absolute", bottom: "0",
    padding: "10px", left: "365px"}}
        placeholder="Type a message..."
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button
        style={{position: "absolute", bottom: "0", width: "90px", margin: "auto", height: "45px", fontSize: "20px", left: "1045px"}}
        onClick={onSubmit}
      >
        Send
      </button>
      <Link href="/end">
            <button style={{margin: "auto", position: "absolute", width: "50%", maxWidth: "150px", bottom: "0", right: "150px",
            fontSize: "20px"}}>End Conversation</button>
      </Link>
      
    </div>
  );
};

export default MessageInput;