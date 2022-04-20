import React, { useEffect } from 'react';
import Selector from './pages/Selector';
import Chat from './pages/Chat';
import { socket } from './utils/socket.utils';
import './App.global.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Chat';

const App: React.FC = () => {

  useEffect(() => {
    socket.emit("connection")
  }, []);

  return (
	<Chat/>
  );
};

export default App;
