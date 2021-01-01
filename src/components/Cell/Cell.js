import React from 'react';
import { STATUS_NEW, STATUS_PLAY, STATUS_WIN, STATUS_LOST } from '../../consts';
import classes from './Cell.module.css';

export const Cell = ({ cell, status, onCellMouseDown, onCellMouseUp, onCellClick }) => {
  let cls = [classes.Cell];

  if (STATUS_NEW === status) {
    cls.push(classes.closed);
  } else if (!cell.isOpen) {
    if (cell.isFlag) {
      if (STATUS_PLAY === status) {
        cls.push(classes.closed, classes.flag, classes.red);
      } else if ((STATUS_WIN === status) || (STATUS_LOST === status)) {
        if (cell.isMine) {
          cls.push(classes.closed, classes.flag, classes.green);
        } else {
          cls.push(classes.closed, classes.flag, classes.gray);
        }
      }
    } else if (cell.isMine) {
      if (STATUS_LOST === status) {
        cls.push(classes.mine);
      } else {
        if (!cell.isPressed) {
          cls.push(classes.closed);
        }
      }
    } else {
      if (!cell.isPressed) {
        cls.push(classes.closed);
      }
    }
  } else {
    if (cell.isMine) {
      cls.push(classes.mine, classes.detonated);
    } else if (0 !== cell.minesNext) {
      cls.push(classes['count-' + cell.minesNext]);
    }
  }

  return (
    <div
      className={cls.join(' ')}
      onMouseDown={event => onCellMouseDown(event, cell.id)}
      onMouseUp={event => onCellMouseUp(event, cell.id)}
      onClick={event => onCellClick(event, cell.id)}
      onContextMenu={event => onCellClick(event, cell.id)}
    />
  );
};
