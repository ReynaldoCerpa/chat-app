import React, { useEffect } from 'react';
import Home from './pages/Chat';
import { socket } from './utils/socket.utils';
import './App.global.css';

const App: React.FC = () => {

  useEffect(() => {
    socket.emit("connection")
  }, []);

  return (
    <Home/>
  );
};

export default App;
