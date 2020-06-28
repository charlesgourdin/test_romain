import React, { useContext } from 'react';

import { GlobalContext } from '../../providers/GlobalContext';

import './style.scss';

function Board() {
  const {
    score, launchBullet, removeAngle, addAngle,
  } = useContext(GlobalContext);

  return (
    <div className="board">
      <h2 className="score">{`Score : ${score}`}</h2>
      <button className="shoot-button" onClick={ () => launchBullet() }>
        Shoot
      </button>
      <div className="angle-button">
        <button onClick={ () => removeAngle() }>-</button>
        <button onClick={ () => addAngle() }>+</button>
      </div>
    </div>
  );
}

export default Board;
