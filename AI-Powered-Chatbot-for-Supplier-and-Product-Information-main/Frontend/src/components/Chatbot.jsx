Chatbot.jsx
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import { queryChatbot } from '../services/api';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    setMessages([...messages, { sender: 'user', text: message }]);
    try {
      const response = await queryChatbot(message);
      setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: response }]);
    } catch (error) {
      setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: 'Error fetching response' }]);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <div className="messages max-h-80 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-green-100'} p-2 my-2 rounded`}>
            {msg.text}
          </div>
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;