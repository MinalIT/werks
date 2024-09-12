import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import './ChatWidget.css'; 

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! How can I help you today?", type: "bot" },
    { id: 2, text: "What is the budget for a single app?", type: "user" },
    { id: 3, text: "The budget for a single app starts from $1000.", type: "bot" },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessage = { id: chatMessages.length + 1, text: input, type: 'user' };
      setChatMessages([...chatMessages, newMessage]);

      let botResponse;

      if (input.toLowerCase().includes('budget')) {
        botResponse = "The budget for 2-3 apps together can range between $2000 to $3000.";
    } else if (input.toLowerCase().includes('Hello')) {
        botResponse = "Hello, How may I hep you ?";
      } else if (input.toLowerCase().includes('erp')) {
        botResponse = "ERP stands for Enterprise Resource Planning.";
      } else if (input.toLowerCase().includes('crm')) {
        botResponse = "CRM stands for Customer Relationship Management.";
      } else if (input.toLowerCase().includes('bye') || input.toLowerCase().includes('exit')) {
        botResponse = "Thank you for chatting with us. Have a great day!";
        setTimeout(() => {
          setIsOpen(false);  // Automatically close the chat after sending the goodbye message
        }, 2000); // Wait 2 seconds before closing
      } else {
        botResponse = "Please provide your email, and our team will connect with you soon.";
      }

      setChatMessages(prev => [...prev, { id: prev.length + 1, text: botResponse, type: "bot" }]);
      setInput('');
    }
  };

  return (
    <div className="chat-widget-container">
      <button className="chat-button" onClick={toggleChat}>
        {isOpen ? <FaTimes size={20} /> : <FaComments size={30} />}
      </button>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="chat-slide"
        unmountOnExit
      >
        <div className="chat-container">
          <div className="chat-header">
            <h4>Chat With Us</h4>
            <button onClick={toggleChat} className="close-button">X</button>
          </div>
          <div className="chat-body">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleSend} className="chat-send-btn">Send</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ChatBot;
