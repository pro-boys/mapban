import React from 'react';
import './App.css';
import "./components/components.css"
import "./pages/pages.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Bo3 } from './pages/Bo3';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Bo1 } from './pages/Bo1';
import { Bo5 } from './pages/Bo5';

function App() {
  return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/bo1' element={<Bo1 />} />
				<Route path='/bo3' element={<Bo3 />}/>
				<Route path='/bo5' element={<Bo5 />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;
