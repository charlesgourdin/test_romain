import React, { useContext } from 'react';

import { GlobalContext } from '../../providers/GlobalContext';

import './style.scss';

function Board() {
  const { launchBullet } = useContext(GlobalContext);

  return (
    <div className="board">
      <button onClick={ () => launchBullet() }>
        Go
      </button>
    </div>
  );
}

export default Board;
