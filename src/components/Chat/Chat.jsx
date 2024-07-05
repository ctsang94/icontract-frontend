import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { io } from 'socket.io-client';
import './Chat.scss';

const socket = io('https://icontract-backend-5.onrender.com'); // Correct URL

function Chat() {
  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleJoin = () => {
    if (userName.trim() && room.trim()) {
      socket.emit('joinRoom', { userName, room });
      setJoined(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
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
          <input
            type='text'
            placeholder='Enter room name'
            value={room}
            onChange={(e) => setRoom(e.target.value)}
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
