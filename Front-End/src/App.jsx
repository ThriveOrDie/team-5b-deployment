import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerHome from './pages/Customer/CustomerHome';
import Login from './pages/Authentication/Login';
import MenuPage from './pages/Customer/MenuPage';
import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<MenuPage showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
      </Routes>
    </Router>
  );
}

export default App;
