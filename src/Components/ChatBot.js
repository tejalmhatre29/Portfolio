import React, { useState } from 'react';
import './Chatbot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm T-Buddy. How can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    const reply = getBotResponse(input.toLowerCase());

    setTimeout(() => {
      setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    }, 600); // Optional: simulate delay

    setInput('');
  };

 const getBotResponse = (msg) => {
  const message = msg.toLowerCase(); // convert input to lowercase

  if (message.includes('name')) return "I'm T-Buddy 🤖, your friendly assistant!";
  if (message.includes('projects')) return "You can find projects in the Projects section!";
  if (message.includes('contact')) return "You can contact Tejal via the Contact page.";
  if (message.includes('skills')) return "Tejal knows React, Node.js, MySQL, and more as mentioned in the dashboard!";
  if (message.includes('hello,hiiiiiii') || message.includes('hi')) return "Hello! 👋 How can I assist you today?";
  if (message.includes('bye') || message.includes('goodbye')) return "Goodbye! 👋 Feel free to chat anytime!";
  if (message.includes('help')) return "Sure! Ask me about projects, skills, contact info, or anything about Tejal.";
  if (message.includes('location,address,live') || message.includes('based')) return "Tejal is based in India 🇮🇳.";
  if (message.includes('education,currently') || message.includes('study')) return "Tejal is currently pursuing Computer Engineering 🎓.";
  if (message.includes('resume') || message.includes('cv')) return "You can find the resume on the Home or About section 📄.";
  if (message.includes('linkedin')) return "You can visit Tejal’s LinkedIn from the Contact section!";
  if (message.includes('github')) return "Tejal’s GitHub has all the projects! Check it out from the Projects section.";

  return "Sorry, I didn't get that. Try asking about projects, skills, contact, or education!";
};


  return (
    <div className="chatbot-container">
      <button className="chat-toggle" onClick={toggleChat}>💬</button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>T-Buddy</span>
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


































/*import React, { useState } from 'react';
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
*/