import React, { useContext } from 'react';

import { GlobalContext } from '../../providers/GlobalContext';

import './style.scss';

function Bullet() {
  const { isBulletMooving, bulletPosition } = useContext(GlobalContext);
  const { top, left } = bulletPosition;

  return (
    <div
      className="bullet"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        transitionDuration: `${isBulletMooving ? '50ms' : '0ms'}`,
      }}
    />
  );
}

export default Bullet;
