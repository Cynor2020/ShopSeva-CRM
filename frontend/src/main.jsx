import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import './App.css'; // If you have global styles

// Inline Home component to handle navigation
const Home = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleGetStarted = () => {
    navigate('/login'); // Navigate to the login page on click
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f0f2f5',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ marginBottom: '1rem', color: '#333' }}>
        Welcome to Shop Seva
      </h1>
      <button
        onClick={handleGetStarted}
        style={{
          padding: '0.75rem 1.5rem',
          background: '#1a73e8',
          border: 'none',
          borderRadius: '4px',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseOver={(e) => (e.target.style.background = '#1557b0')}
        onMouseOut={(e) => (e.target.style.background = '#1a73e8')}
      >
        Get Started Now
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);