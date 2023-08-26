import React, { useState } from 'react';
import './nav.css';

const Navigation = () => {
  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact' },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (id) => {
    setActiveMenu(id);
  };

  const renderSubMenu = (subMenu) => {
    return (
      <ul className="submenu">
        {subMenu.map((item) => (
          <li key={item.id}>
            <a
              className={activeMenu === item.id ? 'active' : ''}
              onClick={() => handleMenuClick(item.id)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="navbar">
      <ul className="menu">
        {navbar.map((item) => (
          <li key={item.id}>
            <a
              className={activeMenu === item.id ? 'active' : ''}
              onClick={() => handleMenuClick(item.id)}
            >
              {item.name}
            </a>
            {item.child && activeMenu === item.id && renderSubMenu(item.child)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
