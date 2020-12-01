import React from 'react';

export const Counter = ({ cells }) => {
  return (
    <div className="topbar-block">
      {cells.filter(cell => cell.isMine).length - cells.filter(cell => cell.isFlag).length}
    </div>
  );
};