import React from 'react';

import Logo from '../Logo';

export default () => {
  return (
    <div className="menu">
      <div className="menu__logo">
        <Logo />
      </div>
      <div className="menu__links">
        <div className="menu__round"></div>
        <div className="menu__round"></div>
        <div className="menu__round"></div>
        <div className="menu__round"></div>
        <div className="menu__round"></div>
        <div className="menu__round"></div>
        <div className="menu__round"></div>
        <div className="menu__round"></div>
      </div>
    </div>
  )
}