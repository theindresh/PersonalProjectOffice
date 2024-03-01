import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../ChatBot/chatbot.css'; 

function Chatbot() {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate bot response after 1 second
      setTimeout(() => {
        setMessages([...messages, { text: getBotResponse(input), sender: 'bot' }]);
      }, 1000);
    }
  };

  const getBotResponse = (input) => {
    // Simple bot responses based on user input
    switch (input.toLowerCase()) {
      case 'how are you?':
        return 'I am fine, thank you!';
      case 'hi':
        return 'Hello! How can I assist you today? 😊';
      case 'hello':
        return 'Hi';
      case 'what is your name?':
        return 'My name is Indresh.';
      case 'what can you do?':
        return 'I can answer questions and have basic conversations.';
      default:
        return "I'm sorry, I don't understand.";
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Open Chat
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Chatbot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Chatbot;
