import React from 'react';

const Header = ({ onOpenCart }) => {
  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="logo">BALLSHOP</div>
      <nav className="NavBar">
        <a className="nav-links" href="#home" onClick={handleHomeClick}>Main</a>
        <a className="nav-links" href="#info" onClick={onOpenCart}>Basket</a>
      </nav>
    </header>
  );
};

export default Header;
