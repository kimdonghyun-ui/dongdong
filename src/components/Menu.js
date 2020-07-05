import React from 'react';
import { NavLink } from 'react-router-dom';

//임시 메뉴
const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem',
  };

  return (
    <div id="menu">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={activeStyle}
            activeClassName="active"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main"
            activeStyle={activeStyle}
            activeClassName="active"
          >
            Main
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
