import React, { useEffect } from 'react';
import Selector from './pages/Selector';
import Chat from './pages/Chat';
import { socket } from './utils/socket.utils';
import './App.global.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App: React.FC = () => {

  useEffect(() => {
    //socket.emit("connection")
  }, []);

  return (
	<Router>
		<Routes>
			<Route exact path="/" element={<Selector/>} />
			<Route exact path="/Room" element={<Chat/>} />
		</Routes>
	</Router>
  );
};

export default App;
