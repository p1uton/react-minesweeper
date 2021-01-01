import React from 'react';
import { LEVELS } from '../../consts';
import { useDispatch } from 'react-redux';
import { resetGameAction } from '../../actions';
import classes from './LevelSelector.module.css';

export const LevelSelector = () => {

  const dispatch = useDispatch();

  return (
    <div className={classes.LevelSelector}>
      {
        LEVELS.map(item => <input
          type="button"
          value={item.name}
          onClick={() => dispatch(resetGameAction(item.id))}
          key={item.id}
        />)
      }
    </div>
  );
  
};