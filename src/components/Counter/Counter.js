import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Counter.module.css';

export const Counter = () => {

  const cells = useSelector(state => state.cells);

  return (
    <div className={classes.Counter}>
      {cells.filter(cell => cell.isMine).length - cells.filter(cell => cell.isFlag).length}
    </div>
  );
  
};