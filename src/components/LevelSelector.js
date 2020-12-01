import React from 'react';
import { LEVELS } from '../consts';

export const LevelSelector = ({ onClick }) => {
  return (
    <div className="bottombar">
      {LEVELS.map(item => <input
        type="button"
        value={item.name}
        onClick={event => onClick(event, item.id)}
        key={item.id}
      />)}
    </div>
  );
};