import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Notes from './pages/Notes';
// import Card from './Components/card';
// import Dashboard from './Components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Implement from './pages/Implement';



function App() {
    return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/implement' element={<Implement/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
      
  );
}
export default App;
