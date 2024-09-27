import React, { useState, useRef, useLayoutEffect } from "react";

function ChatApp() {
  const [messages, setMessages] = useState([
    "Hello!",
    "How are you?",
    "I'm good, thanks!",
    "What about you?",
  ]);
  const chatBoxRef = useRef(null); 

  const addMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      `New message at ${new Date().toLocaleTimeString()}`,
    ]);
  };

  useLayoutEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-red-100 p-4">
     
      <div
        ref={chatBoxRef}
        className="bg-white border border-gray-300 h-64 overflow-y-auto p-4"
      >
        {messages.map((msg, index) => (
          <div key={index} className="p-2">
            {msg}
          </div>
        ))}
      </div>
      <button
        onClick={addMessage}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Add New Message
      </button>
    </div>
  );
}

export default ChatApp;
