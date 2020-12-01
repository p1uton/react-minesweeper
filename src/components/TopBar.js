import React from 'react';
import { Timer } from './Timer';
import { Counter } from './Counter';
import { Status } from './Status';

export const TopBar = ({ cells, status, timer, onResetClick }) => {
  return (
    <div className="topbar">
      <Counter 
        cells={cells}
      />
      <Status 
        status={status}
        onClick={onResetClick}
      />
      <Timer
        timer={timer}
      />
    </div>
  );
};