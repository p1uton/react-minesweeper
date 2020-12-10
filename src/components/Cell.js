import React from 'react';
import { STATUS_NEW, STATUS_PLAY, STATUS_WIN, STATUS_LOST } from '../consts';

export const Cell = ({ cell, status, onCellMouseDown, onCellMouseUp, onCellClick }) => {
  let classes = ['cell'];

  if (STATUS_NEW === status) {
    classes.push('cell-closed');
  } else if (!cell.isOpen) {
    if (cell.isFlag) {
      if (STATUS_PLAY === status) {
        classes.push('cell-closed', 'cell-flag', 'cell-flag-red');
      } else if ((STATUS_WIN === status) || (STATUS_LOST === status)) {
        if (cell.isMine) {
          classes.push('cell-closed', 'cell-flag', 'cell-flag-green');
        } else {
          classes.push('cell-closed', 'cell-flag', 'cell-flag-gray');
        }
      }
    } else if (cell.isMine) {
      if (STATUS_LOST === status) {
        classes.push('cell-mine');
      } else {
        if (!cell.isPressed) {
          classes.push('cell-closed');
        }
      }
    } else {
      if (!cell.isPressed) {
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
      onMouseDown={event => onCellMouseDown(event, cell.id)}
      onMouseUp={event => onCellMouseUp(event, cell.id)}
      onClick={event => onCellClick(event, cell.id)}
      onContextMenu={event => onCellClick(event, cell.id)}
    />
  );
};
