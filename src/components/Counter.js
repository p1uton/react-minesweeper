import React from 'react';
import { useSelector } from 'react-redux';

export const Counter = () => {

  const cells = useSelector(state => state.cells);

  return (
    <div className="topbar-block">
      {cells.filter(cell => cell.isMine).length - cells.filter(cell => cell.isFlag).length}
    </div>
  );
  
};