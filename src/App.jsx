import React from 'react';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

export default function App() {
  const { isLogged, user, logout } = useAuth();

  if (!isLogged) {
    return <Login />;
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">WanderEcommerce Store</div>
        <div className="nav-user">
          <img
            src={user?.image || "https://ui-avatars.com/api/?name=" + (user?.name || "User")}
            alt="User"
            className="nav-avatar"
          />
          <span>{user?.name || 'Guest'}</span>
          <button className="logout-btn-sm" onClick={logout}>Sign Out</button>
        </div>
      </nav>

      <main className="dashboard-grid">
        <div className="products-section">
          <h2 style={{ marginBottom: '1.5rem', fontWeight: 600 }}>Discover Products</h2>
          <ProductList />
        </div>
        <div className="cart-section">
          <Cart />
        </div>
      </main>
    </div>
  );
}
