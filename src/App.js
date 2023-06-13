import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Login from './components/Login';
import Homepage from './components/Home';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="container">
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isLoggedIn ? (
              <Nav.Item>
                <Button variant="link" onClick={handleLogout}>Logout</Button>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="mt-5 pt-5">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/"
            element={isLoggedIn ? <Homepage /> : <Login onLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
