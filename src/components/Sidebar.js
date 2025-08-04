import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', active: true },
    { name: 'Status', active: false },
    { name: 'Reports', active: false },
    { name: 'Notification', active: false }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">Logo</h2>
      </div>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <button className="nav-link">{item.name}</button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn">
          <span className="logout-icon">⇤</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
