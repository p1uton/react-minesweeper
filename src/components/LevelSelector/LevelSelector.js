import React from 'react';
import { LEVELS } from '../../consts';
import { useDispatch } from 'react-redux';
import { resetGameAction } from '../../actions';
import classes from './LevelSelector.module.css';
import { saveLevel } from '../../functions';

export const LevelSelector = () => {

  const dispatch = useDispatch();

  const changeLevelHandler = level => {
    dispatch(resetGameAction(level));
    saveLevel(level);
  }

  return (
    <div className={classes.LevelSelector}>
      {
        LEVELS.map(item => <input
          type="button"
          value={item.name}
          onClick={() => changeLevelHandler(item.id)}
          key={item.id}
        />)
      }
    </div>
  );

};