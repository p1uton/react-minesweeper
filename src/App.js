import React from 'react';
import { useSelector } from 'react-redux';
import { LevelSelector } from './components/LevelSelector';
import { TopBar } from './components/TopBar';
import { Field } from './components/Field';

function App() {
  const level = useSelector(state => state.level);

  return (
    <div className={'container container-' + level}>
      <TopBar />
      <Field />
      <LevelSelector />
    </div>
  );
}

export default App;