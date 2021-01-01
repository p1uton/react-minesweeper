import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGameAction } from '../../actions';
import classes from './Status.module.css';

export const Status = () => {

  const dispatch = useDispatch();

  const status = useSelector(state => state.status);
  const level = useSelector(state => state.level);

  const cls = [classes.Status, classes['Status-' + status]];

  return (
    <div>
      <div
        className={cls.join(' ')}
        onClick={() => dispatch(resetGameAction(level))}
      />
    </div>
  );

};