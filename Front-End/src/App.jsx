import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerHome from './pages/Customer/CustomerHome';
import Login from './pages/Authentication/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
