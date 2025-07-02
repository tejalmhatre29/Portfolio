import React, { useState } from 'react';
import './Chatbot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Tejal's ChatBot. How can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

 const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { text: input, sender: 'user' };
  setMessages(prev => [...prev, userMessage]);

  try {
    const res = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setMessages(prev => [...prev, { text: data.reply, sender: 'bot' }]);
  } catch (err) {
    setMessages(prev => [...prev, { text: "Something went wrong 😓", sender: 'bot' }]);
  }

  setInput('');
};


  const getBotResponse = (msg) => {
    if (msg.includes('name')) return "I'm Tejal's chatbot 🤖";
    if (msg.includes('projects')) return "You can find projects in the Projects section!";
    if (msg.includes('contact')) return "You can contact Tejal via the Contact page.";
    if (msg.includes('skills')) return "Tejal knows React, Node.js, MySQL, and more!";
    return "Sorry, I didn't get that. Try asking about projects, contact, or skills!";
  };

  return (
    <div className="chatbot-container">
      <button className="chat-toggle" onClick={toggleChat}>💬</button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>TejalBot</span>
            <button onClick={toggleChat}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              value={input}
              placeholder="Ask me something..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
