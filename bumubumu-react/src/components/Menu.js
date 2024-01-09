import React from 'react';
import { push as BurgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
  return (
    <BurgerMenu right>
      <Link id="home" className="menu-item" to="/">Anasayfa</Link>
      <Link id="about" className="menu-item" to="/about">Hakkinda</Link>
    </BurgerMenu>
    );
}

export default Menu;
