import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './index.jsx';
import EvoTrail from './EvoTrail.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evo-trail" element={<EvoTrail />} />
      </Routes>
    </BrowserRouter>
  );
}
