import React from 'react';

const ProductList = ({ onProductSelect }) => {
  const products = [
    { id: 1, name: 'Product 1', status: 'error' },
    { id: 2, name: 'Product 2', status: 'success' },
    { id: 3, name: 'Product 3', status: 'error' },
    { id: 4, name: 'Product 4', status: 'success' },
    { id: 5, name: 'Product 5', status: 'error' },
    { id: 6, name: 'Product 6', status: 'success' },
    { id: 7, name: 'Product 7', status: 'error' }
  ];

  const handleProductClick = (product) => {
    onProductSelect(product);
  };

  return (
    <div className="product-list-container">
      <div className="list-header">
        <h3 className="list-title">List of Products</h3>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Product..."
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => handleProductClick(product)}
          >
            <div className="product-info">
              <h4 className="product-name">{product.name}</h4>
              <p className="product-subtitle">{product.name}</p>
            </div>
            <div className={`status-indicator ${product.status}`}>
              {product.status === 'success' ? '✓' : '✕'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
