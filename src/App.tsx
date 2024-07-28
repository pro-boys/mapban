import React from 'react';
import './App.css';
import "./components/components.css"
import "./pages/pages.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { AllMaps } from './pages/AllMaps';

function App() {
  return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/bo1' element={<AllMaps mode='bo1' />} />
				<Route path='/bo3' element={<AllMaps mode='bo3' />}/>
				<Route path='/bo5' element={<AllMaps mode='bo5' />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;
