import React from 'react';

import Menu from '../Menu';
import Content from '../Content';
import Service from '../../service';

export default () => {
  const { getBalance, getBonuses, getNextPayout } = new Service();
  return (
    <div className="container">
      <Menu />
      <Content
        getBalance={getBalance}
        getBonuses={getBonuses}
        getNextPayout={getNextPayout} />
    </div>
  )
}