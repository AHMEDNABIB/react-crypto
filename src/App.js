import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Header></Header>
		
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/coins" element={<Coins />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				
			</Routes>
		</div>
  );
}

export default App
