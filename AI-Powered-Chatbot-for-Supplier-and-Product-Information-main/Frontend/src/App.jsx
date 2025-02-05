import React from 'react';
import Chatbot from './components/Chatbot';
import './index.css';

const App = () => {
  return (
    <div className="app text-center p-4">
      <h1 className="text-2xl font-bold mb-4">AI-Powered Chatbot</h1>
      <Chatbot />
    </div>
  );
};

export default App;