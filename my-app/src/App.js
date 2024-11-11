import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Catalog/Catalog';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout/Checkout';
import Success from './components/Cart/Success/Success';
import { ItemProvider } from './components/Catalog/ItemPage/context/ItemContext'; // Import ItemProvider

const App = () => {
  return (
    <ItemProvider>  {/* Wrap entire Router with ItemProvider */}
      <Router>
        <Navbar /> {/* Navbar no longer needs its own Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/*" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/success" element={<Success />} /> 
        </Routes>
      </Router>
    </ItemProvider>
  );
};

export default App;
