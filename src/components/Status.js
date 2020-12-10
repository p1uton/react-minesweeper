import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGameAction } from '../actions';

export const Status = () => {

  const dispatch = useDispatch();

  const status = useSelector(state => state.status);
  const level = useSelector(state => state.level);

  return (
    <div>
      <div
        className={'status status' + status}
        onClick={() => dispatch(resetGameAction(level))}
      />
    </div>
  );

};