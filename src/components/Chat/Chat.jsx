import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { io } from 'socket.io-client';
import './Chat.scss';

const socket = io('https://icontract-backend.onrender.com'); // Correct URL

function Chat() {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleJoin = () => {
    if (userName) {
      // Emit join event with user name
      socket.emit('join', userName);
      setJoined(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div className='chatbox-container'>
      {!joined ? (
        <div className='join-container'>
          <input
            type='text'
            placeholder='Enter your name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button onClick={handleJoin}>Join Chat</Button>
        </div>
      ) : (
        <div className='chat-container'>
          <ul className='messages'>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
          <form className='form' onSubmit={handleSubmit}>
            <input
              className='user-message'
              type='text'
              placeholder='Enter message here'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type='submit'>Send Message!</Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
