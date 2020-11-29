import React from 'react';

export const TopBar = ({cells, status, timer, onResetClick}) => {
  return (
    <div className="topbar">
      <div className="topbar-block">
        {cells.filter(cell => cell.isMine).length - cells.filter(cell => cell.isFlag).length}
      </div>
      <div className={'status status' + status} onClick={event => onResetClick(event)}>
      </div>
      <div className="topbar-block">
        {timer}
      </div>
    </div>
  );
};