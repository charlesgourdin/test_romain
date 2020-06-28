import React, { useContext } from 'react';

import { GlobalContext } from '../../providers/GlobalContext';

import './style.scss';

function Bullet() {
  const { targetPosition } = useContext(GlobalContext);

  return (
    <div className="target" style={{ top: `${targetPosition}px` }} />
  );
}

export default Bullet;
