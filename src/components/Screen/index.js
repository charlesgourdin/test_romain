import React, { useContext } from 'react';

import Bullet from '../Bullet';
import Target from '../Target';
import { GlobalContext } from '../../providers/GlobalContext';

import './style.scss';

function Screen() {
  const { isBulletMooving, verticalAngle, message } = useContext(GlobalContext);

  return (
    <div className="screen">
      <div className="grid">
        <h1 style={{ display: `${!isBulletMooving ? 'block' : 'none'}` }}>{message}</h1>
        <Bullet />
        <div className="direction" style={{ transform: `rotate(${verticalAngle * 1.328}deg)` }} />
        <Target />
      </div>
      <div className="floor" />
    </div>
  );
}

export default Screen;
