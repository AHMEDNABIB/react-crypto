import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
		<div>
		
			<Routes>
				<Route path="/" element={<Homepage />} />
				
			</Routes>
		</div>
  );
}

export default App
