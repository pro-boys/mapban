import React from 'react';
import './App.css';
import "./components/components.css"
import "./pages/pages.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Bo3 } from './pages/Bo3';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';

function App() {
  return (
		<BrowserRouter>
			<NavBar />
			<Routes>
			<Route path='/' element={<Home />} />
				<Route path='/bo3' element={<Bo3 />}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
