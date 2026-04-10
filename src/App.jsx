import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import OffrePrintemps from './pages/OffrePrintemps';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/offreprintemps" element={<OffrePrintemps />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
