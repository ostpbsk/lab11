import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Catalog/Catalog';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Registration/Registration';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { ItemContext, ItemProvider } from './components/Catalog/ItemPage/context/ItemContext';

const App = () => {
  return (
    <ItemProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/catalog" element={<ProtectedRoute><Catalog /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      </Routes>
    </Router>
    </ItemProvider>
  );
};

export default App;
