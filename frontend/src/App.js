import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Find from './Pages/Find';
import Compare from './Pages/Compare';
import Wishlist from './Pages/Wishlist';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Find />} />           
        <Route path="/compare" element={<Compare />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
