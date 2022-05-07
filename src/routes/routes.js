import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderApp } from '../components/header/Header';
import { Index } from '../components/Index';

export const AppRouter = () => {
  return (
    <Router>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
};
