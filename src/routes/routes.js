import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from '../components/cart/Cart';
import { Footer } from '../components/footer/Footer';
import { HeaderApp } from '../components/header/Header';
import { Index } from '../components/Index';

export const AppRouter = () => {
  return (
    <div className="router">
      <Router>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/carrito-de-compras" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
