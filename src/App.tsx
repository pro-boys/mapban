import React from 'react';
import './App.css';
import "./components/components.css"
import "./pages/pages.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';

function App() {
  return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
