import React, { useContext } from 'react';

import { GlobalContext } from '../../providers/GlobalContext';

import './style.scss';

function Bullet() {
  const { bulletPosition } = useContext(GlobalContext);
  const { top, left } = bulletPosition;

  return (
    <div className="bullet" style={{ top: `${top}px`, left: `${left}px` }} />
  );
}

export default Bullet;
