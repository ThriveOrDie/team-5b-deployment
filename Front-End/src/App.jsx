import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerHome from './pages/Customer/CustomerHome';
import Login from './pages/Authentication/Login';
import MenuPage from './pages/Customer/MenuPage';
import EntreesPage from './pages/Customer/EntreesPage';

function App() {
  const [showSidebar, setShowSidebar] = useState(true); // State to control sidebar visibility

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<MenuPage setShowSidebar={setShowSidebar} />} />
        <Route path="/entrees" element={<EntreesPage showSidebar={showSidebar} />} />
      </Routes>
    </Router>
  );
}

export default App;
