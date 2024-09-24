
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/register" replace />} /> {/* Redirect all other paths */}
      </Routes>
    </Router>
  );
}

export default App;

