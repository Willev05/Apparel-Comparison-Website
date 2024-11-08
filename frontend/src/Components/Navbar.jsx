import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Find
          </NavLink>
        </li>
        <li>
          <NavLink to="/compare" className={({ isActive }) => (isActive ? 'active' : '')}>
            Compare
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'active' : '')}>
            Wishlist
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
