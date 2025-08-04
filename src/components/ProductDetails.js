import React, { useState } from 'react';

const ProductDetails = ({ selectedProduct }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="product-details-container">
      <div className="product-details-header" onClick={toggleExpanded}>
        <h3 className="details-title">Product Details</h3>
        <div className="dropdown-controls">
          <span className="select-product">Select Product</span>
          <button className="dropdown-btn">
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="product-details-content">
          {selectedProduct ? (
            <div className="selected-product-info">
              <h4>{selectedProduct.name}</h4>
              <p>Status: {selectedProduct.status}</p>
              <p>Product ID: {selectedProduct.id}</p>
            </div>
          ) : (
            <p className="no-selection">No product selected</p>
          )}
        </div>
      )}

      <div className="product-detail-card">
        <h4 className="card-title">Product Detail Card</h4>
        <div className="card-content">
          {selectedProduct ? (
            <div className="card-info">
              <div className="info-row">
                <span className="label">Name:</span>
                <span className="value">{selectedProduct.name}</span>
              </div>
              <div className="info-row">
                <span className="label">Status:</span>
                <span className={`value status-${selectedProduct.status}`}>
                  {selectedProduct.status}
                </span>
              </div>
            </div>
          ) : (
            <p className="placeholder-text">Select a product to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
