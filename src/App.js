import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Counter from './components/Counter';
import ProductDetails from './components/ProductDetails';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productCount, setProductCount] = useState(0);

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="user-avatar">R</div>
        </div>
        <div className="content-grid">
          <div className="left-section">
            <ProductList onProductSelect={setSelectedProduct} />
          </div>
          <div className="right-section">
            <Counter count={productCount} setCount={setProductCount} />
            <div className="numbered-sections">
              <div className="number-item">1</div>
              <div className="number-item">2</div>
              <div className="number-item">3</div>
            </div>
            <ProductDetails selectedProduct={selectedProduct} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
