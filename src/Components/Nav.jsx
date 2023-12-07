
// nav.jsx component


import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
      <button style={buttonStyle}>
        <NavLink to="/">Categorize</NavLink>
      </button>
      <button style={buttonStyle}>
        <NavLink to="/close">Close</NavLink>
      </button>
      <button style={buttonStyle}>
        <NavLink to="/comprehension">Comprehension</NavLink>
      </button>
    </nav>
  );
};

const buttonStyle = {
  padding: '10px',
  border: 'none',
  background: '#4CAF50', 
  color: 'white', 
  cursor: 'pointer',
};

export default Nav;




















