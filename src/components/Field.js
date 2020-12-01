import React from 'react';
import { LEVELS } from '../consts';
import { Cell } from '../components/Cell';

export const Field = ({ cells, level, status, onCellClick, onCellMouseDown, onCellMouseUp }) => {
  return (
    <div
      className="field"
      style={{ width: LEVELS[level].cols * 20, height: LEVELS[level].rows * 20 }}
    >
      {cells.map(cell => <Cell
        key={cell.id}
        cell={cell}
        status={status}
        onClick={onCellClick}
        onMouseDown={onCellMouseDown}
        onMouseUp={onCellMouseUp}
      />)}
    </div>
  );
};