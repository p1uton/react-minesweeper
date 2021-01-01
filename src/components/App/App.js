import React from 'react';
import { useSelector } from 'react-redux';
import { LevelSelector } from '../LevelSelector/LevelSelector';
import { TopBar } from '../TopBar/TopBar';
import { Field } from '../Field/Field';
import classes from './App.module.css';

function App() {
  const level = useSelector(state => state.level);

  const cls = [classes.container, classes['container-' + level]];

  return (
    <div className={cls.join(' ')}>
      <TopBar />
      <Field />
      <LevelSelector />
    </div>
  );
}

export default App;