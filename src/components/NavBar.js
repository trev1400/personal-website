import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render () {
        return (
            <div className="navBarContainer">
                <li><NavLink exact to="/personal-website" activeClassName="activeLink">HOME</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="activeLink">ABOUT</NavLink></li>
                <li><NavLink exact to="/experience" activeClassName="activeLink">EXPERIENCE</NavLink></li>
                <li><NavLink exact to="/projects" activeClassName="activeLink">PROJECTS</NavLink></li>
                <li><a href="https://drive.google.com/file/d/1aSnr7XX_ttxO5RV_udo9U-vRW1NE0cH_/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a></li>
            </div>
        );
    }
  }
  
export default NavBar;
  