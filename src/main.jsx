import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import App from "./App.jsx";
import Render from "./Render.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";

import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>
);
