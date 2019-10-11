import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

class NavBar extends Component {
  
  static contextType = ThemeContext
  
  render() {
    
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark
    
    return (
      <nav style={{ background: theme.ui, color: theme.syntax}}>
        <h3>Context App</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
