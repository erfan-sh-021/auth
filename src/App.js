import React from 'react';
import { Provider } from 'react-redux';
import './App.css'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import { store } from './store';
import Auth from './component/auth';
import ProductList from './component/productList';
import Cart from './component/cart';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <h1>My Store</h1>
          <Auth />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;