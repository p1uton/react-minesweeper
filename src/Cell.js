import React from 'react';

export const Cell = ({cell, status, onClick, onMouseDown, onMouseUp}) => {
  let classes = ['cell'];

  if (0 === status) {
    classes.push('cell-closed');
  } else if (!cell.isOpen) {
    if (cell.isFlag) {
      if (1 === status) {
        classes.push('cell-closed', 'cell-flag', 'cell-flag-red');
      } else if ((2 === status) || (3 === status)) {
        if (cell.isMine) {
          classes.push('cell-closed', 'cell-flag', 'cell-flag-green');
        } else {
          classes.push('cell-closed', 'cell-flag', 'cell-flag-gray');
        }
      }
    } else if (cell.isMine) {
      if (3 === status) {
        classes.push('cell-mine');
      } else {
        if (!cell.isMouseDown) {
          classes.push('cell-closed');
        }
      }
    } else {
      if (!cell.isMouseDown) {
        classes.push('cell-closed');
      }
    }
  } else {
    if (cell.isMine) {
      classes.push('cell-mine', 'cell-detonated');
    } else if (0 !== cell.minesNext) {
      classes.push('cell-' + cell.minesNext);
    }
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={event => onClick(event, cell.id, false)}
      onContextMenu={event => onClick(event, cell.id, true)}
      onMouseDown={event => onMouseDown(event, cell.id)}
      onMouseUp={event => onMouseUp(event, cell.id)}
    />
  );
};
