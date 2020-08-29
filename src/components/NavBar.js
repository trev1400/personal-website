import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render () {
        return (
            <div className="navBarContainer">
                <li><NavLink exact to="/" activeClassName="activeLink">HOME</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="activeLink">ABOUT</NavLink></li>
                <li><NavLink exact to="/experience" activeClassName="activeLink">EXPERIENCE</NavLink></li>
                <li><NavLink exact to="/projects" activeClassName="activeLink">PROJECTS</NavLink></li>
                <li><a href="https://drive.google.com/file/d/1rh4szys0Cs62sCgp9KiM1q1gfCsuxlS9/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a></li>
            </div>
        );
    }
  }
  
export default NavBar;
  