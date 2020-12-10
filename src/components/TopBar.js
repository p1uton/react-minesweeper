import React from 'react';
import { Timer } from './Timer';
import { Counter } from './Counter';
import { Status } from './Status';

export const TopBar = () => {
  return (
    <div className="topbar">
      <Counter />
      <Status />
      <Timer />
    </div>
  );
};