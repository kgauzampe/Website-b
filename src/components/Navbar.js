import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.scss'; // Import the SCSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" exact activeClassName="active">Home test</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
