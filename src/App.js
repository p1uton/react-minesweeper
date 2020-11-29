import React, {useState, useEffect} from 'react';
import {isNext, getCell, checkStatus, countFlagsNext, initialCells} from './functions';
import {LEVELS} from './consts';
import {LevelSelector} from './components/LevelSelector/LevelSelector';
import {TopBar} from './components/TopBar/TopBar';
import {Field} from './components/Field/Field';

function App() {

  const [level, setLevel] = useState(() => 1);
  const [status, setStatus] = useState(() => 0);
  const [timer, setTimer] = useState(() => 0);
  const [cells, setCells] = useState(() => initialCells(LEVELS[level]));


  useEffect(() => {
    if (1 === status) {
      const interval = setInterval(() => {
        setTimer(value => value + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [status]);


  const handleCellClick = (event, id, isRightClick) => {
    event.preventDefault();

    if ((2 === status) || (3 === status)) {
      return;
    }

    if (0 === status) {
      setStatus(1);
    }

    let currentCells = cells.concat();

    const currentCell = getCell(currentCells, id);

    if (isRightClick) {
      if (!currentCell.isOpen) {
        flagCell(currentCells, id);
      }
    } else {
      if (!currentCell.isFlag) {
        if (!currentCell.isOpen) {
          openCell(currentCells, id);
        } else {
          if (currentCell.minesNext === countFlagsNext(currentCells, id)) {
            currentCells
              .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag && cell.isMine)
              .map(cell => openCell(currentCells, cell.id));
            if (3 !== checkStatus(currentCells, status)) {
              currentCells
                .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag)
                .map(cell => openCell(currentCells, cell.id));
            }
          }
        }
      }
    }

    setCells(currentCells);

    setStatus(status => checkStatus(currentCells, status));
  };


  const handleCellMouseDown = (event, id) => {
    event.preventDefault();

    let currentCells = cells.concat();
    const currentCell = getCell(currentCells, id);

    if (currentCell.isOpen) {
      currentCells
        .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag)
        .map(cell => cell.isMouseDown = true);

      setCells(currentCells);
    }
  };


  const handleCellMouseUp = (event, id) => {
    event.preventDefault();

    let currentCells = cells.concat();
    const currentCell = getCell(currentCells, id);

    if (currentCell.isOpen) {
      currentCells
        .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag)
        .map(cell => cell.isMouseDown = false);

      setCells(currentCells);
    }
  };


  const flagCell = (currentCells, id) => {
    currentCells.map(cell => cell.id === id ? cell.isFlag = !cell.isFlag : null);
  };


  const openCell = (currentCells, id) => {
    currentCells.map(cell => cell.id === id ? cell.isOpen = true : null);

    const currentCell = getCell(currentCells, id);
    if (!currentCell.isMine && (0 === currentCell.minesNext)) {
      currentCells
        .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag)
        .map(cell => openCell(currentCells, cell.id));
    }
  };


  const handleResetClick = event => {
    event.preventDefault();
    resetGame(level);
  };


  const resetGame = newLevel => {
    setLevel(newLevel);
    setStatus(0);
    setTimer(0);
    setCells(initialCells(LEVELS[newLevel]));
  };


  const handleLevelClick = (event, newLevel) => {
    event.preventDefault();
    resetGame(newLevel);
  };


  return (
    <div>
      <div className="container" style={{width: LEVELS[level].cols*20}}>
        <TopBar 
          cells={cells}
          status={status}
          timer={timer}
          onResetClick={handleResetClick}
        />
        <Field 
          cells={cells}
          level={level}
          status={status}
          onCellClick={handleCellClick}
          onCellMouseDown={handleCellMouseDown}
          onCellMouseUp={handleCellMouseUp}
        />
        <LevelSelector 
          onClick={handleLevelClick}
        />
      </div>
    </div>
  );
}

export default App;