import React from 'react';
import { Timer } from '../Timer/Timer';
import { Counter } from '../Counter/Counter';
import { Status } from '../Status/Status';
import classes from './TopBar.module.css';

export const TopBar = () => {
  return (
    <div className={classes.TopBar}>
      <Counter />
      <Status />
      <Timer />
    </div>
  );
};